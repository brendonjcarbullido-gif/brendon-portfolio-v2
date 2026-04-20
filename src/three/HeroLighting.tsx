export function HeroLighting() {
  return (
    <>
      <directionalLight position={[0, 8, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[0, -5, -8]} intensity={0.3} color="#c8a04a" distance={20} />
      <ambientLight intensity={0.08} color="#0f0d0b" />
      <pointLight position={[0, 0, -18]} intensity={0.15} color="#1a1510" distance={15} />
    </>
  )
}
