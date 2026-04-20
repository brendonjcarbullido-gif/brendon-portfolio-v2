import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { parallaxEnabled, setParallaxEnabled } from '@/three/parallaxState'

const ROLES = [
  'Art Director',
  'Creative Director',
  'Brand Strategist',
  'Content Director',
]

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
        height: '1.6em',
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            color: 'inherit',
            fontFamily: 'inherit',
            fontStyle: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function HeroTextOverlay() {
  const [is3DEnabled, setIs3DEnabled] = useState(parallaxEnabled.value)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMedia = () => {
      setReducedMotion(media.matches)
    }
    onMedia()
    media.addEventListener('change', onMedia)

    const onResize = () => {
      setIsCoarsePointer(window.matchMedia('(pointer: coarse)').matches)
    }
    onResize()
    window.addEventListener('resize', onResize)

    const onParallaxToggle = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail
      setIs3DEnabled(typeof detail === 'boolean' ? detail : parallaxEnabled.value)
    }
    window.addEventListener('parallax-toggle', onParallaxToggle)

    return () => {
      media.removeEventListener('change', onMedia)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('parallax-toggle', onParallaxToggle)
    }
  }, [])

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  const isLandscape =
    typeof window !== 'undefined' &&
    window.innerWidth > window.innerHeight &&
    window.innerWidth < 1024
  const bottomPos = isLandscape ? '12%' : isMobile ? 'clamp(140px, 30%, 240px)' : '18%'
  const showParallaxToggle = !isCoarsePointer

  const handleToggle = () => {
    const next = !parallaxEnabled.value
    setParallaxEnabled(next)
    setIs3DEnabled(next)
  }

  return (
    <>
      {showParallaxToggle ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={handleToggle}
          type="button"
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 50,
            background: is3DEnabled ? 'rgba(196,168,130,0.15)' : 'rgba(245,240,232,0.06)',
            border: is3DEnabled
              ? '1px solid rgba(196,168,130,0.5)'
              : '1px solid rgba(245,240,232,0.2)',
            color: is3DEnabled ? '#C4A882' : 'rgba(245,240,232,0.6)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease',
            pointerEvents: 'auto',
          }}
        >
          {is3DEnabled && !reducedMotion ? '3D ON' : '3D OFF'}
        </motion.button>
      ) : null}

      <div
        style={{
          position: 'absolute',
          bottom: bottomPos,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            minHeight: '4rem',
            color: '#C4A882',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          <RoleRotator />
        </div>

        <div
          style={{
            color: 'rgba(245,240,232,0.55)',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.7rem, 1.8vw, 1.1rem)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Full-ownership creative.&nbsp;&nbsp;Los Angeles.
        </div>
      </div>
    </>
  )
}
