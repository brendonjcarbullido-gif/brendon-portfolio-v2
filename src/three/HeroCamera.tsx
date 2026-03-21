import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const input = { x: 0, y: 0 }

if (typeof window !== 'undefined') {
  window.addEventListener(
    'mousemove',
    (e) => {
      input.x = (e.clientX / window.innerWidth) * 2 - 1
      input.y = -((e.clientY / window.innerHeight) * 2 - 1)
    },
    { passive: true },
  )
}

function initGyroscope() {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
  if (!isMobile) return

  let attached = false

  const onOrientation = (e: DeviceOrientationEvent) => {
    const x = Math.max(-1, Math.min(1, -(e.gamma ?? 0) / 30))
    const y = Math.max(-1, Math.min(1, ((e.beta ?? 0) - 15) / 30))
    input.x = x
    input.y = y
  }

  const startGyro = () => {
    if (attached) return
    attached = true
    window.addEventListener('deviceorientation', onOrientation, { passive: true })
  }

  const DeviceOrientationEventMaybe = DeviceOrientationEvent as unknown as {
    requestPermission?: () => Promise<'granted' | 'denied'>
  }

  const requestPermission = DeviceOrientationEventMaybe.requestPermission
  if (typeof requestPermission === 'function') {
    const onTouch = async () => {
      try {
        const result = await requestPermission()
        if (result === 'granted') startGyro()
      } catch {
        /* permission denied */
      }
      document.removeEventListener('touchstart', onTouch)
    }
    document.addEventListener('touchstart', onTouch, { once: true, passive: true })
  } else {
    startGyro()
  }
}

if (typeof window !== 'undefined') {
  initGyroscope()
}

const BASE_Z = 5
const RANGE_X = 0.7
const RANGE_Y = 0.4
const LERP_SPEED = 0.04

export function HeroCamera() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, BASE_Z))

  useFrame(() => {
    target.current.set(input.x * RANGE_X, input.y * RANGE_Y, BASE_Z)
    camera.position.lerp(target.current, LERP_SPEED)
    camera.lookAt(0, 0, 0)
  })

  return null
}
