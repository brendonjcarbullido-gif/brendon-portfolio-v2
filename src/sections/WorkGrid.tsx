import { useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/data/projects'
import { WorkCard } from '@/components/WorkCard'

const gridItems = [
  { project: projects[0], colStart: 1, colEnd: 8, height: 560 },
  { project: projects[1], colStart: 8, colEnd: 13, height: 560 },
  { project: projects[2], colStart: 1, colEnd: 5, height: 400 },
  { project: projects[3], colStart: 5, colEnd: 9, height: 400 },
  { project: projects[4], colStart: 9, colEnd: 13, height: 400 },
  { project: projects[5], colStart: 1, colEnd: 7, height: 480 },
  { project: projects[6], colStart: 7, colEnd: 13, height: 480 },
  { project: projects[7], colStart: 1, colEnd: 13, height: 360 },
] as const

const gridContainerStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'auto',
  gap: '16px',
  width: '100%',
}

export function WorkGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="work"
      className="bg-[#0a0a0a] pb-[160px] pl-4 pr-4 pt-[120px] text-[#f5f0e8] md:pl-[60px] md:pr-[60px]"
    >
      <style>{`
        @media (max-width: 767px) {
          .work-grid-root {
            grid-template-columns: 1fr !important;
          }
          .work-grid-root > .work-grid__cell {
            grid-column: 1 / -1 !important;
            height: 280px !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1600px]">
        <header className="flex w-full flex-row items-baseline justify-between gap-4">
          <h2
            className="font-bebas leading-none text-[#f5f0e8]"
            style={{
              fontSize: 'clamp(64px, 8vw, 96px)',
              letterSpacing: '-0.02em',
            }}
          >
            SELECTED WORK
          </h2>
          <p
            className="font-bebas leading-none text-[#c9a96e] shrink-0"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            <span className="sr-only">8 projects — </span>08
          </p>
        </header>

        <div
          className="w-full"
          style={{
            height: '1px',
            backgroundColor: 'rgba(201, 169, 110, 0.3)',
            margin: '24px 0 48px',
          }}
          aria-hidden
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="work-grid-root" style={gridContainerStyle}>
            {gridItems.map((item) => (
              <WorkCard
                key={item.project.slug}
                project={item.project}
                colStart={item.colStart}
                colEnd={item.colEnd}
                height={item.height}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
