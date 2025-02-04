import type { Metadata } from "next";
import "@/app/globals.css";
import NavigationBar from "@/app/ui/navigation-bar";
import { notoSansKr, eulyoo1945 } from "@/app/fonts"

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
      <body>
        <div className={`fixed top-0 left-0 right-0 shadow ${notoSansKr} antialiased`}>
          <NavigationBar></NavigationBar>
        </div>
        <div className={`${eulyoo1945.className} antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}
