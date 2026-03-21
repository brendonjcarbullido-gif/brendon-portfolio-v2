import { HeroScene } from '@/three/HeroScene'
import { Marquee } from '@/sections/Marquee'
import { About } from '@/sections/About'
import { Process } from '@/sections/Process'
import { Expertise } from '@/sections/Expertise'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

function WorkPlaceholder() {
  return (
    <section
      id="work"
      style={{
        minHeight: '80vh',
        background: '#EDE7D9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '2rem',
        color: 'rgba(107,98,88,0.4)',
        letterSpacing: '0.08em',
      }}
    >
      Work Grid — Phase 3
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroScene />
      <Marquee />
      <WorkPlaceholder />
      <About />
      <Process />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  )
}
