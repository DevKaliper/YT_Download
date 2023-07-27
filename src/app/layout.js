
"use client"
import './globals.css'
import { SnackbarProvider } from 'notistack'

import Header from '@/components/header'
import Footer from '@/components/footer'
import {Ball} from '@/components/CursorShadow'
import Head from 'next/head'



export default function RootLayout({ children }) {

  
  return (
    
    <html lang="es">
      <Head>
        <title>Free YT Downloader</title>
      </Head>
      
      <body className="bg-[#050211] " >
        <Ball />
      <Header />
        
        {children}
        <Footer />

      
        
        </body>
    </html>
  
  )
}
