import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1A1612',
        color: '#F5F0E8',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '3rem',
        letterSpacing: '0.1em',
      }}
    >
      BC — V2 Loading
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<div>Case Study</div>} />
      </Routes>
    </BrowserRouter>
  )
}
