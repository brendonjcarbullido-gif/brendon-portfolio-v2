import { Html } from '@react-three/drei'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThree } from '@react-three/fiber'

const ROLES = ['Art Director', 'Creative Director', 'Brand Strategist', 'Content Director']

function RoleRotator({
  fontSize = '2.2rem',
  height = '3rem',
}: {
  fontSize?: string
  height?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        height,
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
            fontSize,
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
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 11)

  const rotatorY = -0.58 * scale
  const taglineY = -0.88 * scale
  const rotatorFontSize = `${2.2 * scale}rem`
  const taglineFontSize = `${1.1 * scale}rem`
  const rotatorHeight = `${3 * scale}rem`

  return (
    <group>
      <Html
        position={[0, rotatorY, 3.0]}
        center
        occlude={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        zIndexRange={[1, 10]}
      >
        <RoleRotator fontSize={rotatorFontSize} height={rotatorHeight} />
      </Html>
      <Html
        position={[0, taglineY, 2.5]}
        center
        occlude={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        zIndexRange={[1, 10]}
      >
        <p
          style={{
            color: 'rgba(245,240,232,0.45)',
            fontSize: taglineFontSize,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.18em',
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
