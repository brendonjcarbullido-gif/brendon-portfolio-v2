import { Line } from '@react-three/drei'
import * as THREE from 'three'

export function RoomEdges() {
  const X = 12
  const Y = 6
  const ZF = 0
  const ZB = -22

  const faceEdgeColor = '#2a2621'
  const depthEdgeColor = '#4a4238'
  const faceOpacity = 0.55
  const depthOpacity = 0.95

  return (
    <group>
      <Line
        points={[
          [-X, -Y, ZF],
          [X, -Y, ZF],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [-X, Y, ZF],
          [X, Y, ZF],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [-X, -Y, ZF],
          [-X, Y, ZF],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [X, -Y, ZF],
          [X, Y, ZF],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />

      <Line
        points={[
          [-X, -Y, ZB],
          [X, -Y, ZB],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [-X, Y, ZB],
          [X, Y, ZB],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [-X, -Y, ZB],
          [-X, Y, ZB],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [X, -Y, ZB],
          [X, Y, ZB],
        ]}
        color={faceEdgeColor}
        lineWidth={0.8}
        transparent
        opacity={faceOpacity}
        depthTest={false}
      />

      <Line
        points={[
          [-X, -Y, ZF],
          [-X, -Y, ZB],
        ]}
        color={depthEdgeColor}
        lineWidth={2}
        transparent
        opacity={depthOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [X, -Y, ZF],
          [X, -Y, ZB],
        ]}
        color={depthEdgeColor}
        lineWidth={2}
        transparent
        opacity={depthOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [-X, Y, ZF],
          [-X, Y, ZB],
        ]}
        color={depthEdgeColor}
        lineWidth={2}
        transparent
        opacity={depthOpacity}
        depthTest={false}
      />
      <Line
        points={[
          [X, Y, ZF],
          [X, Y, ZB],
        ]}
        color={depthEdgeColor}
        lineWidth={2}
        transparent
        opacity={depthOpacity}
        depthTest={false}
      />
    </group>
  )
}

export function HeroRoom() {
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: '#0c0b09',
    roughness: 1,
    metalness: 0,
    side: THREE.BackSide,
  })

  return (
    <group>
      <mesh position={[0, 0, -11]} material={wallMaterial}>
        <boxGeometry args={[24, 12, 22]} />
      </mesh>
      <RoomEdges />
    </group>
  )
}
