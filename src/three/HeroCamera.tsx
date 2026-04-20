import { useFrame, useThree } from '@react-three/fiber'
import { heroLookInput } from './heroLookInput'
import { faceInput } from './faceInput'
import { parallaxState } from './parallaxState'
import { sceneScale } from './sceneScale'

let gyroRunning = false

if (typeof window !== 'undefined') {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
  if (!isMobile) {
    window.addEventListener(
      'mousemove',
      (e) => {
        heroLookInput.x = (e.clientX / window.innerWidth) * 2 - 1
        heroLookInput.y = -((e.clientY / window.innerHeight) * 2 - 1)
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
  heroLookInput.x = 0
  heroLookInput.y = 0
}

function handleOrientation(e: DeviceOrientationEvent) {
  if (!gyroRunning) return
  heroLookInput.x = Math.max(-1, Math.min(1, -(e.gamma ?? 0) / 30))
  heroLookInput.y = Math.max(-1, Math.min(1, ((e.beta ?? 0) - 15) / 30))
}

if (typeof window !== 'undefined') {
  window.addEventListener('gyro-start', startGyro)
  window.addEventListener('gyro-stop', stopGyro)
}

const SCREEN_W = 10.0
const SCREEN_H = 6.5
const CAM_Z = 5.0
const NEAR = 0.1
const FAR = 100.0
const HEAD_SCALE_X = 0.8
const HEAD_SCALE_Y = 0.5

let smoothX = 0
let smoothY = 0
let smoothSceneScale = 1

export function HeroCamera() {
  const { camera } = useThree()

  useFrame((_, delta) => {
    const enabled = parallaxState?.enabled ?? true
    const rawX = faceInput.active ? faceInput.x : heroLookInput.x
    const rawY = faceInput.active ? faceInput.y : heroLookInput.y
    const clampedX = Math.max(-1, Math.min(1, rawX))
    const clampedY = Math.max(-1, Math.min(1, rawY))
    const targetX = enabled ? clampedX * HEAD_SCALE_X : 0
    const targetY = enabled ? clampedY * HEAD_SCALE_Y : 0
    const lerp = Math.min(1, 1.8 * delta)
    smoothX += (targetX - smoothX) * lerp
    smoothY += (targetY - smoothY) * lerp

    camera.position.set(smoothX, smoothY, CAM_Z)
    camera.lookAt(0, 0, 0)

    let targetScale = 1
    if (faceInput.active && faceInput.z > 0) {
      const Z_DEFAULT = 0.12
      const zDelta = Z_DEFAULT - faceInput.z
      const scaled = 1.0 + zDelta * 0.8
      targetScale = Math.max(0.85, Math.min(1.15, scaled))
    }
    smoothSceneScale += (targetScale - smoothSceneScale) * 0.02
    sceneScale.value = smoothSceneScale

    const scaledScreenW = SCREEN_W / smoothSceneScale
    const scaledScreenH = SCREEN_H / smoothSceneScale
    const left = (NEAR / CAM_Z) * (-scaledScreenW / 2 - smoothX)
    const right = (NEAR / CAM_Z) * (scaledScreenW / 2 - smoothX)
    const top = (NEAR / CAM_Z) * (scaledScreenH / 2 - smoothY)
    const bottom = (NEAR / CAM_Z) * (-scaledScreenH / 2 - smoothY)

    camera.projectionMatrix.makePerspective(left, right, top, bottom, NEAR, FAR)
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert()
  })

  return null
}
