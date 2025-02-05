import { eulyoo1945 } from "@/app/fonts";
import "@/app/globals.css";
import NavigationBar from "@/app/ui/navigation-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ysmir blog",
  description: "Blog of ysmir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`fixed top-0 left-0 right-0 shadow`}>
          <NavigationBar></NavigationBar>
        </div>
        <div className={`${eulyoo1945.className} antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}
