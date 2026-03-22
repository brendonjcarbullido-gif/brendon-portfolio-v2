import { useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'

const cream = '#f5f0e8'
const gold = '#c9a96e'
const bg = '#0a0a0a'

const bodyStyle: CSSProperties = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: '17px',
  lineHeight: 1.8,
  color: 'rgba(245, 240, 232, 0.8)',
}

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .about-inner {
            grid-template-columns: 3fr 2fr !important;
            align-items: stretch;
          }
        }
      `}</style>
      <section
        ref={ref}
        id="about"
        className="pl-6 pr-6 pt-[160px] pb-[160px] md:pl-[60px] md:pr-[60px]"
        style={{ backgroundColor: bg, color: cream }}
      >
        <div className="about-inner mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:gap-16">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="font-bebas uppercase"
              style={{
                fontSize: '14px',
                color: gold,
                letterSpacing: '0.2em',
                marginBottom: '48px',
              }}
            >
              ABOUT
            </p>
            <h2
              className="font-serif italic"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontStyle: 'italic',
                color: cream,
                marginBottom: '40px',
                lineHeight: 1.15,
              }}
            >
              Brendon Carbullido
            </h2>
            <div className="space-y-6" style={{ marginBottom: '48px' }}>
              <p style={bodyStyle}>
                Multidisciplinary creative based in Los Angeles. Seven years building brands,
                directing campaigns, and producing content across fashion, lifestyle, and consumer
                goods — from concept to final frame.
              </p>
              <p style={bodyStyle}>
                Fluent across the full creative stack: art direction, photography, video, packaging
                design, social strategy. The kind of operator who can walk onto a shoot, direct
                talent, edit the footage, and deploy the campaign — without handing off to anyone.
              </p>
              <p style={bodyStyle}>
                Former collegiate athlete. That discipline shows up in the work.
              </p>
            </div>
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
              <div>
                <p
                  className="font-bebas leading-none text-[#c9a96e]"
                  style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                >
                  7+ YEARS
                </p>
                <p
                  className="mt-2 font-sans uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: 'rgba(245, 240, 232, 0.6)',
                  }}
                >
                  Building brands
                </p>
              </div>
              <div>
                <p
                  className="font-bebas leading-none text-[#c9a96e]"
                  style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                >
                  3 DISCIPLINES
                </p>
                <p
                  className="mt-2 font-sans uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: 'rgba(245, 240, 232, 0.6)',
                  }}
                >
                  Art Direction · Photography · Brand Strategy
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[420px] w-full md:h-full md:min-h-0"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[3/4] min-h-[420px] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full md:min-h-[500px]">
              <img
                src="/images/about/brendon-portrait.jpg"
                alt="Brendon Carbullido"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  filter: 'grayscale(20%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: [
                    'linear-gradient(to bottom, #0a0a0a 0%, transparent 15%, transparent 85%, #0a0a0a 100%)',
                    'linear-gradient(to right, transparent 85%, #0a0a0a 100%)',
                    'linear-gradient(to left, transparent 85%, #0a0a0a 100%)',
                  ].join(', '),
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
