import React from 'react'

export default function Layout({ children }){
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {children}
      </div>

      <a
        href="https://wa.me/233501326989"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" />
            <path d="M21.6 10.4C20.5 9.3 19 8.7 17.4 8.7c-3 0-5.5 2.4-5.5 5.4 0 1 .3 1.9.7 2.7l-1 3.6 3.7-1c.8.4 1.7.6 2.6.6h0c3 0 5.5-2.4 5.5-5.4 0-1.4-.6-2.9-1.8-3.9zm-4.2 8.7h0c-.8 0-1.5-.2-2.2-.5l-.2-.1-2.2.6.6-2.1-.1-.2c-.4-.7-.6-1.5-.6-2.3 0-2.4 2-4.4 4.5-4.4 1.2 0 2.3.4 3.1 1.2.8.8 1.3 1.9 1.3 3.1 0 2.4-2 4.4-4.4 4.4zm2.4-3.3c-.1-.1-.8-.4-1.1-.5-.1 0-.2-.1-.3.1-.1.1-.3.5-.4.6-.1.1-.2.1-.3 0-.1-.1-.5-.2-.9-.5-.3-.2-.6-.5-.8-.8-.1-.1 0-.2.1-.3.1-.1.2-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.1-.7-1.1-.9-1.5-.2-.4-.4-.3-.6-.3h-.3c-.1 0-.3.1-.4.2-.1.1-.5.5-.5 1.2 0 .7.5 1.4.5 1.5.1.2 1.1 1.8 2.7 2.5.4.2.8.3 1.1.4.4.1.7.1 1 .1.3 0 1-.4 1.2-.8.1-.4.1-.7.1-.8 0-.1-.1-.1-.2-.2z" fill="currentColor" />
          </svg>
        </span>
      </a>
    </div>
  )
}
