import { Text } from '@react-three/drei'

const FONT =
  'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff'

export function HeroText() {
  return (
    <group>
      <Text
        position={[0, 0.75, 2.0]}
        fontSize={1.35}
        font={FONT}
        color="#F5F0E8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.02}
        lineHeight={1}
        // @ts-ignore drei Text forwards material props
        material-toneMapped={false}
        // @ts-ignore
        material-roughness={0.25}
        // @ts-ignore
        material-metalness={0.1}
      >
        BRENDON
      </Text>
      <Text
        position={[0, -0.5, 1.5]}
        fontSize={1.1}
        font={FONT}
        color="#F5F0E8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.02}
        lineHeight={1}
        // @ts-ignore
        material-toneMapped={false}
        // @ts-ignore
        material-roughness={0.25}
        // @ts-ignore
        material-metalness={0.1}
      >
        CARBULLIDO
      </Text>
    </group>
  )
}
