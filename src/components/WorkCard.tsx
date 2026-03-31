import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

const containerVariants = {
  rest: {},
  hover: {},
} as const

const mediaVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
} as const

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
} as const

const labelVariants = {
  rest: { y: 8, opacity: 0 },
  hover: { y: 0, opacity: 1 },
} as const

const mediaTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }

export interface WorkCardProps {
  project: Project
  colStart: number
  colEnd: number
  height: number
  /** Reserved for future staggered card motion; section animates as a unit for now. */
  animationDelay?: number
}

export function WorkCard({ project, colStart, colEnd, height }: WorkCardProps) {
  const to = `/work/${project.slug}`

  return (
    <motion.div
      className="work-grid__cell"
      style={{
        gridColumn: `${colStart} / ${colEnd}`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
    >
      <Link
        to={to}
        aria-label={`${project.client} — ${project.category}. View case study.`}
        className="absolute inset-0 block text-left no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        style={{ cursor: 'pointer' }}
      >
        <motion.div
          className="absolute inset-0 overflow-hidden"
          variants={mediaVariants}
          transition={mediaTransition}
        >
          {project.mediaType === 'video' && project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              poster={project.image}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : null}
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        <motion.div
          className="pointer-events-none absolute bottom-0 left-0"
          style={{ padding: '24px' }}
          variants={labelVariants}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          <p
            className="font-bebas text-[18px] leading-tight"
            style={{ color: '#f5f0e8', letterSpacing: '0.08em' }}
          >
            {project.client}
          </p>
          <p
            className="mt-1 font-sans text-[12px] font-medium uppercase leading-snug"
            style={{ color: '#c9a96e', letterSpacing: '0.12em' }}
          >
            {project.category}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  )
}
