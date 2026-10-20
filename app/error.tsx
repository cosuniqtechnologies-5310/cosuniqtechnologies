'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-plus-jakarta-sans), sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
        Something went wrong
      </h2>
      <p style={{ color: '#666', maxWidth: '500px', marginBottom: '2rem', lineHeight: 1.6 }}>
        We encountered an unexpected error while loading this section.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#FF6B00',
            color: '#fff',
            borderRadius: '100px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
          style={{
            padding: '12px 24px',
            backgroundColor: '#f4f4f5',
            color: '#111',
            borderRadius: '100px',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
