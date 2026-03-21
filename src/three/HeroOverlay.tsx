import { Html } from '@react-three/drei'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = ['Art Director', 'Creative Director', 'Brand Strategist', 'Content Director']

function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        height: '2rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '280px',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            color: '#C4A882',
            fontSize: '1.05rem',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
          }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function HeroOverlay() {
  return (
    <group>
      <Html
        position={[0, -1.5, 0.8]}
        center
        occlude={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        zIndexRange={[1, 10]}
      >
        <RoleRotator />
      </Html>
      <Html
        position={[0, -2.2, 0.3]}
        center
        occlude={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        zIndexRange={[1, 10]}
      >
        <p
          style={{
            color: 'rgba(245,240,232,0.45)',
            fontSize: '0.7rem',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Full-ownership creative.&nbsp;&nbsp;Los Angeles.
        </p>
      </Html>
    </group>
  )
}
