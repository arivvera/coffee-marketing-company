import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <main>
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}
