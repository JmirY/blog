import type { Metadata } from "next";
import "@/app/globals.css";
import NavigationBar from "@/app/ui/navigation-bar";
import { notoSansKr } from "@/app/fonts"

export const metadata: Metadata = {
  title: "Dragonstone's Blog",
  description: "Blog of dragonstone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKr.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 shadow">
          <NavigationBar></NavigationBar>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
