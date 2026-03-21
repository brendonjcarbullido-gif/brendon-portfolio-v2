import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function HeroVideo() {
  const meshRef = useRef<THREE.Mesh>(null)
  const textureRef = useRef<THREE.VideoTexture | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/videos/C0006.mov'
    video.autoplay = true
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.style.cssText = 'position:fixed;top:-9999px;opacity:0;pointer-events:none;'
    document.body.appendChild(video)

    video.play().catch(() => {
      const tryPlay = () => {
        void video.play()
        window.removeEventListener('click', tryPlay)
      }
      window.addEventListener('click', tryPlay)
    })

    const texture = new THREE.VideoTexture(video)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.colorSpace = THREE.SRGBColorSpace
    textureRef.current = texture

    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial
      mat.map = texture
      mat.needsUpdate = true
    }

    return () => {
      video.remove()
      texture.dispose()
    }
  }, [])

  useFrame(() => {
    if (textureRef.current) textureRef.current.needsUpdate = true
  })

  return (
    <group position={[0, 0, -3]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[14, 7.875]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[14, 7.875]} />
        <meshBasicMaterial color="#0D0B09" transparent opacity={0.58} depthWrite={false} />
      </mesh>
    </group>
  )
}
