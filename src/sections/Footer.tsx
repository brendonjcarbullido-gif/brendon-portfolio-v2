import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IG = 'https://www.instagram.com/brendon.carbullido'
const LI = 'https://www.linkedin.com/in/brendoncarbullido'

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer
      ref={ref}
      className="border-t border-[rgba(201,169,110,0.15)] bg-[#0a0a0a] px-6 py-8 md:px-[60px]"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <motion.div
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span
          className="font-bebas order-1 md:order-none"
          style={{ fontSize: '18px', color: 'rgba(245, 240, 232, 0.4)' }}
        >
          BC
        </span>
        <p
          className="order-3 font-sans md:order-none"
          style={{ fontSize: '12px', color: 'rgba(245, 240, 232, 0.3)' }}
        >
          © 2026 Brendon Carbullido. All rights reserved.
        </p>
        <div
          className="order-2 flex items-center justify-center gap-6 font-sans md:order-none md:justify-end"
          style={{ fontSize: '12px' }}
        >
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(245,240,232,0.4)] no-underline transition-colors duration-300 hover:text-[#c9a96e]"
          >
            Instagram
          </a>
          <a
            href={LI}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(245,240,232,0.4)] no-underline transition-colors duration-300 hover:text-[#c9a96e]"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
