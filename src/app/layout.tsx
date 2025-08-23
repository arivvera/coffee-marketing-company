import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Cubacafé | Empresa de Torrefacción y Comercialización de Café",
  description: "La Empresa de Torrefacción y Comercialización de Café, Cubacafé, es una entidad de capital 100% estatal, perteneciente al Ministerio de la Industria Alimentaría (MINAL), con 14 torrefactoras a lo largo de todo el país que producen para el mercado interno y la exportación, lo que nos convierte en líder de producción y comercialización de café tostado en grano y molido en Cuba.",
}

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
