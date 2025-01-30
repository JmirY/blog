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
        <div className="flex flex-col items-center">
          <div className="w-full">
            <NavigationPanel></NavigationPanel>
          </div>
          <div className="max-w-5xl px-20 py-14">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
