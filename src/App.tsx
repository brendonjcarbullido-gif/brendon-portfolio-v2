import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import Home from '@/pages/Home'

function CaseStudy() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#1A1612',
        color: '#F5F0E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.5rem',
      }}
    >
      Case Study — Phase 5
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
