import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function VideoVignette() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {},
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          void main() {
            vec2 center = vUv - 0.5;
            float dist = length(center);
            float vignette = smoothstep(0.3, 0.85, dist);
            gl_FragColor = vec4(0.04, 0.04, 0.03, vignette * 0.75);
          }
        `,
      }),
    [],
  )

  return (
    <mesh position={[0, 0, -21.8]} material={material}>
      <planeGeometry args={[24, 12]} />
    </mesh>
  )
}

export function HeroVideo() {
  const meshRef = useRef<THREE.Mesh>(null)
  const textureRef = useRef<THREE.VideoTexture | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/videos/C0006.mp4'
    video.autoplay = true
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('muted', '')
    video.setAttribute('autoplay', '')
    video.setAttribute('webkit-playsinline', '')
    video.crossOrigin = 'anonymous'

    video.style.cssText =
      'position:fixed;top:-9999px;opacity:0;pointer-events:none;width:1px;height:1px;'
    document.body.appendChild(video)

    video.load()

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const tryPlay = () => {
          void video.play()
          document.removeEventListener('touchstart', tryPlay)
          window.removeEventListener('click', tryPlay)
        }
        document.addEventListener('touchstart', tryPlay, { once: true, passive: true })
        window.addEventListener('click', tryPlay, { once: true })
      })
    }

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
    <>
      <mesh ref={meshRef} position={[0, 0, -21.9]}>
        <planeGeometry args={[24, 12]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, -21.89]}>
        <planeGeometry args={[24, 12]} />
        <meshBasicMaterial color="#0D0B09" transparent opacity={0.35} depthWrite={false} />
      </mesh>
      <VideoVignette />
    </>
  )
}
