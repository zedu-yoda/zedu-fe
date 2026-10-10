import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zedu Yoda Contributors Board | Zedu",
  description:
    "Explore and submit contributions to the Zedu Yoda developer community. Track contributors, Zedu usernames, and linked GitHub repositories.",
  openGraph: {
    title: "Zedu Yoda Contributors Board | Zedu",
    description:
      "Explore and submit contributions to the Zedu Yoda developer community. Track contributors, Zedu usernames, and linked GitHub repositories.",
    url: "/contributors/zedu-yoda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedu Yoda Contributors Board | Zedu",
    description:
      "Explore and submit contributions to the Zedu Yoda developer community.",
  },
  alternates: {
    canonical: "/contributors/zedu-yoda",
  },
};

export default function ZeduYodaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
