import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const input = { x: 0, y: 0 }
let gyroRunning = false

if (typeof window !== 'undefined') {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
  if (!isMobile) {
    window.addEventListener(
      'mousemove',
      (e) => {
        input.x = (e.clientX / window.innerWidth) * 2 - 1
        input.y = -((e.clientY / window.innerHeight) * 2 - 1)
      },
      { passive: true },
    )
  }
}

function startGyro() {
  if (gyroRunning) return
  gyroRunning = true
  window.addEventListener('deviceorientation', handleOrientation, { passive: true })
}

function stopGyro() {
  gyroRunning = false
  window.removeEventListener('deviceorientation', handleOrientation)
  input.x = 0
  input.y = 0
}

function handleOrientation(e: DeviceOrientationEvent) {
  if (!gyroRunning) return
  input.x = Math.max(-1, Math.min(1, -(e.gamma ?? 0) / 30))
  input.y = Math.max(-1, Math.min(1, ((e.beta ?? 0) - 15) / 30))
}

if (typeof window !== 'undefined') {
  window.addEventListener('gyro-start', startGyro)
  window.addEventListener('gyro-stop', stopGyro)
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
