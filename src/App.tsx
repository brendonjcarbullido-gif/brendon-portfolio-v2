import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { GyroPermission } from '@/components/GyroPermission'
import { FaceTracker } from '@/three/FaceTracker'
import Home from '@/pages/Home'

function CaseStudyPlaceholder() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#f5f0e8',
        padding: '2rem',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '1.25rem',
      }}
    >
      Case study coming soon — {slug ?? '…'}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <GyroPermission />
      <FaceTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudyPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}
