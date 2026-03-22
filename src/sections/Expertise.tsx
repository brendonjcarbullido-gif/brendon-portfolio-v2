import { useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'

const bg = '#0a0a0a'
const cellBg = '#111111'
const cream = '#f5f0e8'

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '12px',
  width: '100%',
}

const cells = [
  {
    title: 'Art Direction',
    lines: ['Campaign Direction', 'Visual Identity', 'Shoot Direction', 'Mood Boarding'],
    colStart: 1,
    colEnd: 7,
    row: 1,
    height: 280,
    wide: false,
  },
  {
    title: 'Brand Strategy',
    lines: ['Brand Development', 'Content Strategy', 'Audience Growth', 'Campaign Planning'],
    colStart: 7,
    colEnd: 13,
    row: 1,
    height: 280,
    wide: false,
  },
  {
    title: 'Photography',
    lines: ['Campaign Shoots', 'Product Photography', 'Editorial', 'Retouching'],
    colStart: 1,
    colEnd: 5,
    row: 2,
    height: 240,
    wide: false,
  },
  {
    title: 'Social Media',
    lines: ['Content Calendars', 'Platform Strategy', 'Analytics', 'Community Growth'],
    colStart: 5,
    colEnd: 9,
    row: 2,
    height: 240,
    wide: false,
  },
  {
    title: 'Production',
    lines: ['Video', 'Editing', 'Post-Production', 'Livestream'],
    colStart: 9,
    colEnd: 13,
    row: 2,
    height: 240,
    wide: false,
  },
  {
    title: 'AI-Integrated Workflows',
    lines: ['ComfyUI', 'Prompt Engineering', 'AI Content Strategy', 'Automated Pipelines'],
    colStart: 1,
    colEnd: 13,
    row: 3,
    height: 180,
    wide: true,
  },
] as const

function Cell({
  title,
  lines,
  wide,
}: {
  title: string
  lines: readonly string[]
  wide: boolean
}) {
  return (
    <div
      className="group h-full min-h-0 border border-[rgba(201,169,110,0.15)] transition-[border-color] duration-300 hover:border-[rgba(201,169,110,0.5)]"
      style={{
        backgroundColor: cellBg,
        padding: '32px',
      }}
    >
      {wide ? (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h3
            className="font-bebas shrink-0 leading-tight text-[#f5f0e8]"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
          >
            {title}
          </h3>
          <p
            className="font-sans text-[13px] leading-[1.9] md:text-right"
            style={{ color: 'rgba(245, 240, 232, 0.6)' }}
          >
            {lines.join(' · ')}
          </p>
        </div>
      ) : (
        <>
          <h3
            className="font-bebas leading-tight text-[#f5f0e8]"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
          >
            {title}
          </h3>
          <ul className="mt-4 list-none space-y-0 p-0 font-sans text-[13px] leading-[1.9]">
            {lines.map((line) => (
              <li key={line} style={{ color: 'rgba(245, 240, 232, 0.6)' }}>
                {line}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export function Expertise() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .expertise-bento > * {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
            height: auto !important;
            min-height: 160px !important;
          }
        }
      `}</style>
      <section
        ref={ref}
        id="expertise"
        className="bg-[#0a0a0a] pl-6 pr-6 pt-[120px] pb-[120px] md:pl-[60px] md:pr-[60px]"
        style={{ backgroundColor: bg, color: cream }}
      >
        <div className="mx-auto max-w-[1200px]">
          <motion.h2
            className="font-bebas leading-none text-[#f5f0e8]"
            style={{
              fontSize: 'clamp(64px, 8vw, 96px)',
              marginBottom: '64px',
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            EXPERTISE
          </motion.h2>

          <motion.div
            className="expertise-bento"
            style={gridStyle}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          >
            {cells.map((cell) => (
              <div
                key={cell.title}
                className="min-h-0"
                style={{
                  gridColumn: `${cell.colStart} / ${cell.colEnd}`,
                  gridRow: cell.row,
                  height: `${cell.height}px`,
                }}
              >
                <Cell title={cell.title} lines={cell.lines} wide={cell.wide} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
