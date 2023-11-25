import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/header/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kevin Wu — Personal Website",
  description:
    "My personal site, created with Next, React, Tailwind, Framer Motion, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
