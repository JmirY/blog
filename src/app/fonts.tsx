import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

export const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const eulyoo1945 = localFont({
  src: [
    {
      path: "../font/Eulyoo1945-Regular.woff2",
      weight: "400",
    },
    {
      path: "../font/Eulyoo1945-SemiBold.woff2",
      weight: "600",
    }
  ]
});

export const tlabYoonDJ = localFont({
  src: [
    {
      path: "../font/TlabYoonDJ.woff2",
      weight: "400",
    }
  ]
});
