import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IG = 'https://www.instagram.com/brendon.carbullido'
const LI = 'https://www.linkedin.com/in/brendoncarbullido'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
        fill="currentColor"
      />
      <path
        d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6A5.2 5.2 0 0 1 16.8 22H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm9.6 1.7H7.2a3.5 3.5 0 0 0-3.5 3.5v9.6a3.5 3.5 0 0 0 3.5 3.5h9.6a3.5 3.5 0 0 0 3.5-3.5V7.2a3.5 3.5 0 0 0-3.5-3.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.5 9.2v10.3H3.2V9.2h3.3ZM4.9 4.1a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM21 19.5h-3.3v-5c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7v5.1h-3.3V9.2h3.2v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] px-6 pt-[160px] pb-[160px] text-center md:px-[60px]"
      style={{ backgroundColor: '#0a0a0a', color: '#f5f0e8' }}
    >
      <motion.div
        className="mx-auto flex max-w-[720px] flex-col items-center"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p
          className="font-bebas uppercase"
          style={{
            fontSize: '14px',
            color: '#c9a96e',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}
        >
          NEXT PROJECT
        </p>
        <h2
          className="font-serif italic text-[#f5f0e8]"
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontStyle: 'italic',
            lineHeight: 1.1,
          }}
        >
          Let&apos;s work together.
        </h2>
        <p
          className="mt-4 font-sans text-[15px]"
          style={{ color: 'rgba(245, 240, 232, 0.6)' }}
        >
          Available for freelance and full-time creative roles.
        </p>
        <a
          href="mailto:brendonjcarbullido@gmail.com"
          className="font-bebas mt-12 inline-block border border-[#c9a96e] bg-transparent text-[#f5f0e8] transition-colors duration-300 hover:bg-[#c9a96e] hover:text-[#0a0a0a]"
          style={{
            fontSize: '16px',
            letterSpacing: '0.1em',
            padding: '16px 40px',
            textDecoration: 'none',
          }}
        >
          brendonjcarbullido@gmail.com
        </a>
        <div
          className="mt-10 flex items-center justify-center text-[#c9a96e]"
          style={{ gap: '24px' }}
        >
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(201,169,110,0.75)] transition-colors duration-300 hover:text-[#c9a96e]"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={LI}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(201,169,110,0.75)] transition-colors duration-300 hover:text-[#c9a96e]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
