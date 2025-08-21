import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const cervoNeueFont = localFont({
  src: [
    {
      path: "./CervoNeue-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./CervoNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./CervoNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CervoNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cervoNeueFont.className}>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
