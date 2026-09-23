import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morgan’s Agent Workspace | OpenAI",
  description:
    "An interactive agent-led enterprise marketing prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
