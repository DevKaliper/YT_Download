import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Ball } from "@/components/CursorShadow";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Free YT Downloader</title>
        <meta
          name="description"
          content="Free YT Downloader"
        />
      </Head>

      <body className="bg-[#050211] relative ">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
