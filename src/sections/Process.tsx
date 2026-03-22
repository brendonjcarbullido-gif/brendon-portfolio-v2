import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cream = '#f5f0e8'
const bg = '#0a0a0a'

const steps = [
  {
    n: '01',
    title: 'Discover',
    body: 'Immerse in the brand, the audience, and the gap between them.',
  },
  {
    n: '02',
    title: 'Concept',
    body: 'Develop the visual language before touching a single tool.',
  },
  {
    n: '03',
    title: 'Execute',
    body: 'Shoot, design, edit, and produce — all under one roof.',
  },
  {
    n: '04',
    title: 'Deploy',
    body: 'Launch, measure, and refine until the numbers move.',
  },
] as const

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="process"
      className="bg-[#0a0a0a] pl-6 pr-6 pt-[120px] pb-[120px] text-[#f5f0e8] md:pl-[60px] md:pr-[60px]"
      style={{ backgroundColor: bg, color: cream }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          className="font-bebas leading-none text-[#f5f0e8]"
          style={{
            fontSize: 'clamp(64px, 8vw, 96px)',
            marginBottom: '80px',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          PROCESS
        </motion.h2>

        <div className="flex flex-col gap-16 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              className={
                index > 0
                  ? 'relative flex-1 md:border-l md:border-[rgba(201,169,110,0.25)] md:pl-8'
                  : 'relative flex-1 md:pr-2'
              }
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="relative min-h-[140px] md:min-h-[200px]">
                <span
                  className="pointer-events-none absolute left-0 top-0 font-bebas leading-none select-none"
                  style={{
                    fontSize: 'clamp(80px, 10vw, 120px)',
                    color: 'rgba(201, 169, 110, 0.2)',
                    lineHeight: 0.85,
                  }}
                  aria-hidden
                >
                  {step.n}
                </span>
                <div className="relative z-[1] pt-2 md:pt-4">
                  <h3
                    className="font-bebas leading-tight text-[#f5f0e8]"
                    style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: '12px' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="max-w-[240px] font-serif"
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'rgba(245, 240, 232, 0.7)',
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
