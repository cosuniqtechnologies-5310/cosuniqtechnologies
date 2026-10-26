/**
 * Google Indexing API & Search Engine Push Script
 *
 * This script submits all pages from the Cosuniq sitemap to Google and search engines.
 *
 * Usage:
 *   node scripts/push-google-indexing.js
 *
 * Optional for Google Indexing API:
 *   Place your Google Cloud service account JSON file at `./service_account.json`
 *   or set GOOGLE_APPLICATION_CREDENTIALS in .env.local
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Extract all URLs from sitemap.xml
function getSitemapUrls() {
  const publicSitemap = path.join(__dirname, '../public/sitemap.xml');
  const outSitemap = path.join(__dirname, '../out/sitemap.xml');

  let sitemapContent = '';
  if (fs.existsSync(publicSitemap)) {
    sitemapContent = fs.readFileSync(publicSitemap, 'utf8');
  } else if (fs.existsSync(outSitemap)) {
    sitemapContent = fs.readFileSync(outSitemap, 'utf8');
  }

  const urls = [];
  const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  // Fallback list if sitemap hasn't been written to disk yet
  if (urls.length === 0) {
    const baseUrl = 'https://www.cosuniq.in';
    const core = [
      '',
      '/services',
      '/case-studies',
      '/portfolio',
      '/blog',
      '/insights',
      '/about',
      '/academy',
      '/contact',
      '/privacy-policy',
      '/terms-and-conditions'
    ];
    const services = [
      '/services/web-development',
      '/services/mobile-apps',
      '/services/ui-ux-design',
      '/services/brand-identity',
      '/services/ecommerce',
      '/services/ai-software',
      '/services/cloud-devops',
      '/services/strategy-consulting'
    ];
    const locations = [
      '/locations/coimbatore',
      '/locations/tiruppur',
      '/locations/pollachi',
      '/locations/udumalpet',
      '/locations/palani'
    ];
    const blogs = [
      '/blog/why-nextjs-is-the-standard-for-enterprise-web-apps',
      '/blog/designing-for-conversions-in-modern-ecommerce',
      '/blog/building-offline-first-mobile-apps-react-native',
      '/blog/leveraging-custom-llms-in-business-workflows',
      '/blog/the-roi-of-a-unified-design-system',
      '/blog/cloud-cost-optimization-aws-kubernetes',
      '/blog/what-is-pr-in-software-development-agile-ai-sdlc',
      '/blog/what-is-personal-branding-meaning-strategy-mockups',
      '/blog/website-development-cost-guide-factors',
      '/blog/how-to-choose-a-website-development-company',
      '/blog/shopify-vs-custom-ecommerce-development',
      '/blog/custom-software-vs-off-the-shelf-erp-inventory'
    ];

    [...core, ...services, ...locations, ...blogs].forEach(p => urls.push(baseUrl + p));
  }

  return urls;
}

// Ping IndexNow (Bing, Yandex, Seznam, Naver)
function pushIndexNow(urls) {
  return new Promise((resolve) => {
    const host = 'cosuniq.in';
    const postData = JSON.stringify({
      host: host,
      key: 'cosuniq2026indexnow',
      keyLocation: `https://${host}/cosuniq2026indexnow.txt`,
      urlList: urls
    });

    const req = https.request({
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, res => {
      console.log(`📡 IndexNow submission status: ${res.statusCode}`);
      resolve();
    });

    req.on('error', err => {
      console.warn('IndexNow notice:', err.message);
      resolve();
    });

    req.write(postData);
    req.end();
  });
}

// Google Indexing API using Service Account
async function pushGoogleIndexing(urls) {
  const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, '../service_account.json');

  if (!fs.existsSync(keyPath)) {
    console.log('\n─────────────────────────────────────────────────────────────────');
    console.log('ℹ️  Google Indexing API Service Account Key not found.');
    console.log('   To automate direct API pushes to Google:');
    console.log('   1. Create a Service Account in Google Cloud Console.');
    console.log('   2. Enable "Web Search Indexing API".');
    console.log('   3. Download JSON key as "service_account.json" into this project.');
    console.log('   4. Add the service account email as an Owner in Google Search Console.');
    console.log('─────────────────────────────────────────────────────────────────\n');
    return false;
  }

  try {
    const crypto = require('crypto');
    const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

    // Create JWT
    const now = Math.floor(Date.now() / 1000);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({
      iss: keyData.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    })).toString('base64url');

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(`${header}.${payload}`);
    const signature = signer.sign(keyData.private_key, 'base64url');
    const jwt = `${header}.${payload}.${signature}`;

    // Get OAuth2 token
    const token = await new Promise((resolve, reject) => {
      const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
      const req = https.request({
        hostname: 'oauth2.googleapis.com',
        path: '/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      }, res => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            resolve(data.access_token);
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', reject);
      req.write(postData);
      req.end();
    });

    if (!token) {
      console.error('Failed to obtain Google OAuth access token.');
      return false;
    }

    console.log(`\n🚀 Submitting ${urls.length} URLs to Google Indexing API...`);
    let count = 0;
    for (const url of urls) {
      const body = JSON.stringify({
        url: url,
        type: 'URL_UPDATED'
      });

      await new Promise((resolve) => {
        const req = https.request({
          hostname: 'indexing.googleapis.com',
          path: '/v3/urlNotifications:publish',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Length': Buffer.byteLength(body)
          }
        }, res => {
          if (res.statusCode === 200) {
            count++;
            console.log(`  ✓ [${count}/${urls.length}] Submitted: ${url}`);
          } else {
            console.log(`  ! [HTTP ${res.statusCode}] ${url}`);
          }
          resolve();
        });
        req.on('error', () => resolve());
        req.write(body);
        req.end();
      });
      // Small pause to respect Google rate limits
      await new Promise(r => setTimeout(r, 100));
    }

    console.log(`\n🎉 Successfully pushed ${count} URLs to Google Indexing queue!`);
    return true;
  } catch (err) {
    console.error('Google Indexing API Error:', err.message);
    return false;
  }
}

async function main() {
  const urls = getSitemapUrls();
  console.log(`\n📋 Found ${urls.length} pages in Cosuniq sitemap:`);
  urls.forEach((u, i) => console.log(`   ${(i + 1).toString().padStart(2, ' ')}. ${u}`));

  await pushIndexNow(urls);
  await pushGoogleIndexing(urls);

  console.log('\n═════════════════════════════════════════════════════════════════');
  console.log('📌 MANUAL GOOGLE SEARCH CONSOLE PUSH (FASTEST INDEXING):');
  console.log('1. Visit: https://search.google.com/search-console');
  console.log('2. Select Property: cosuniq.in');
  console.log('3. Sitemaps -> Submit: sitemap.xml');
  console.log('4. URL Inspection -> Enter top priority URLs -> "Request Indexing"');
  console.log('═════════════════════════════════════════════════════════════════\n');
}

main();
