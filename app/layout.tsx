import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apartmany",
  description: "Apartmany v srdci přírody",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gww6vaa.css" />
        <style>{`
          @import url("https://use.typekit.net/gww6vaa.css");
          :root {
            --font-lato: "lato", sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
