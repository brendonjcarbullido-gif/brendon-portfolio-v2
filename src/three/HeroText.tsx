import { Text } from '@react-three/drei'

export function HeroText() {
  return (
    <group>
      <Text
        position={[0, 0.32, 2.0]}
        fontSize={0.72}
        color="#F5F0E8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.02}
        lineHeight={1}
        material-toneMapped={false}
      >
        BRENDON
      </Text>
      <Text
        position={[0, -0.32, 1.8]}
        fontSize={0.58}
        color="#F5F0E8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.01}
        lineHeight={1}
        material-toneMapped={false}
      >
        CARBULLIDO
      </Text>
    </group>
  )
}
