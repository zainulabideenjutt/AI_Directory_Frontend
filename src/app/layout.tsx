import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aixploria - AI Tools Directory & List of Best Free AI by Category",
  description:
    "Discover the best AI tools directory available online. Our site features a selection of listings arranged in categories that make it easy for you to find AIs that meet your criteria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${poppins.variable} antialiased bg-background text-foreground `}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
