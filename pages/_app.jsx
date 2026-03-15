import '../styles.css'
import '../styles/admin.css'
import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  const hideLayout = Component.noLayout === true

  return (
    <div className="app-root">
      <Head>
        <title>EKG Logistics - Logistics & Executive Mobility</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#071029" />
      </Head>
      <a className="skip-link" href="#site-main">Skip to content</a>
      {!hideLayout && <Navbar />}
      <main id="site-main">
        <Component {...pageProps} />
      </main>
      {!hideLayout && <Footer />}
      <a
        href="https://wa.me/2330204001146"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path d="M25.5 6.5C23.6 4.6 21 3.5 18.2 3.5 12.3 3.5 7.5 8.2 7.5 14.1c0 1.9.5 3.7 1.5 5.3L7 25.8l6.6-1.9c1.5.8 3.3 1.2 5.1 1.2 5.9 0 10.6-4.7 10.6-10.5 0-2.8-1.1-5.4-3-7.1zM18.7 22c-1.6 0-3.1-.4-4.5-1.1l-.3-.2-3.9 1.1 1.1-3.8-.2-.3c-.9-1.4-1.3-3-1.3-4.7 0-4.9 4-8.9 9-8.9 2.4 0 4.6.9 6.3 2.6 1.7 1.7 2.6 3.9 2.6 6.3 0 4.9-4 8.9-8.9 8.9zm4.9-6.7c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.3-.1-.4-.1-.1-.7-1.7-1-2.3-.2-.6-.4-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1.1 2.8 1.3 3 .2.4.3.5c.7 1.1 1.7 2 2.7 2.6 1.3.7 2.3.9 3.1 1 .3 0 .6 0 .8 0 .3 0 .8-.3.9-.7.1-.4.3-.7.3-.8.1-.2 0-.3-.2-.4z" />
          </svg>
        </span>
      </a>
    </div>
  )
}
