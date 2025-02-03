import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { NavigationPanel } from "@/app/ui/panel/navigation-panel";
import { notoSansKr } from "@/app/ui/fonts"

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
          <NavigationPanel></NavigationPanel>
        </div>
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
