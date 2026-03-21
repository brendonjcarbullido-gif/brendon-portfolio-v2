import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

let mouseX = 0
let mouseY = 0

if (typeof window !== 'undefined') {
  window.addEventListener(
    'mousemove',
    (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -((e.clientY / window.innerHeight) * 2 - 1)
    },
    { passive: true },
  )
}

const BASE_Z = 5
const RANGE_X = 0.9
const RANGE_Y = 0.55
const LERP_SPEED = 0.04

export function HeroCamera() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, BASE_Z))

  useFrame(() => {
    target.current.set(mouseX * RANGE_X, mouseY * RANGE_Y, BASE_Z)
    camera.position.lerp(target.current, LERP_SPEED)
    camera.lookAt(0, 0, 0)
  })

  return null
}
