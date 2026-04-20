import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { HeroCamera } from './HeroCamera'
import { HeroVideo } from './HeroVideo'
import { HeroText } from './HeroText'
import { PostFX } from './PostFX'
import { HeroRoom } from './HeroRoom'
import { HeroTextOverlay } from '@/components/HeroTextOverlay'
import { HeroLighting } from './HeroLighting'
import { setHeroParallaxVisibility } from './parallaxState'
import { sceneScale } from './sceneScale'

function RoomRoot() {
  const roomRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!roomRef.current) return
    const current = roomRef.current.scale.x
    const next = current + (sceneScale.value - current) * 0.02
    roomRef.current.scale.setScalar(next)
  })

  return (
    <group ref={roomRef}>
      <HeroLighting />
      <HeroRoom />
      <HeroVideo />
      <HeroText />
      <PostFX />
    </group>
  )
}

function SceneContents() {
  return (
    <>
      <HeroCamera />
      <RoomRoot />
    </>
  )
}

export function HeroScene() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroParallaxVisibility(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#0D0B09',
      }}
    >
      <Canvas
        camera={{ fov: 60, near: 0.1, far: 100, position: [0, 0, 5] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <fog attach="fog" args={['#080706', 8, 30]} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshBasicMaterial color="#F5F0E8" />
            </mesh>
          }
        >
          <SceneContents />
        </Suspense>
      </Canvas>

      <HeroTextOverlay />

      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: 'rgba(245,240,232,0.4)',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 300,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'rgba(245,240,232,0.3)',
            animation: 'scrollPulse 2.2s ease-in-out infinite',
          }}
        />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(0.55); }
        }
      `}</style>
    </div>
  )
}
