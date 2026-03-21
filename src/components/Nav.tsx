import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => (typeof window !== 'undefined' ? window.innerWidth >= 768 : true),
  )
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768)
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isDesktop
}

function DesktopLinks() {
  const isDesktop = useIsDesktop()
  if (!isDesktop) return null
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      {['Work', 'About', 'Contact'].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          style={{
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.55)',
            fontFamily: 'DM Sans, sans-serif',
            textDecoration: 'none',
            transition: 'color 0.25s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0E8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}
        >
          {link}
        </a>
      ))}
      <a
        href="/files/brendon-carbullido-resume.pdf"
        download
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.5)',
          border: '1px solid rgba(245,240,232,0.2)',
          padding: '8px 16px',
          fontFamily: 'DM Sans, sans-serif',
          textDecoration: 'none',
          transition: 'all 0.25s',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.color = '#F5F0E8'
          el.style.borderColor = 'rgba(245,240,232,0.5)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.color = 'rgba(245,240,232,0.5)'
          el.style.borderColor = 'rgba(245,240,232,0.2)'
        }}
      >
        Résumé ↓
      </a>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 28px',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F5F0E8',
            textDecoration: 'none',
          }}
        >
          BC
        </a>

        <DesktopLinks />

        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          <span style={{ width: '24px', height: '1px', background: '#F5F0E8', display: 'block' }} />
          <span style={{ width: '24px', height: '1px', background: '#F5F0E8', display: 'block' }} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: '#1A1612',
              display: 'flex',
              flexDirection: 'column',
              padding: '40px',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                color: '#F5F0E8',
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginBottom: '48px',
              }}
            >
              ✕
            </button>

            {['Work', 'About', 'Contact'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                  textDecoration: 'none',
                }}
              >
                {link}
              </motion.a>
            ))}

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="https://www.instagram.com/brendon.carbullido"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Instagram ↗
              </a>
              <a
                href="https://www.linkedin.com/in/brendoncarbullido"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                  textDecoration: 'none',
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="/files/brendon-carbullido-resume.pdf"
                download
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.5)',
                  border: '1px solid rgba(245,240,232,0.2)',
                  padding: '14px 24px',
                  textAlign: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Résumé ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
