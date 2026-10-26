import type { Metadata } from "next";
import NotFoundClient from "../components/NotFoundClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Cosuniq Technologies",
  description:
    "The requested page could not be found. Explore Cosuniq Technologies' services, showcase, engineering insights, or contact our team.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
