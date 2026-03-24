import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { GyroPermission } from '@/components/GyroPermission'
import { FaceTracker } from '@/three/FaceTracker'
import Home from '@/pages/Home'
import { CaseStudy } from './pages/CaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <GyroPermission />
      <FaceTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
