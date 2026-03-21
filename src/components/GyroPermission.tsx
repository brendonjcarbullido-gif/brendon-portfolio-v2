import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DeviceOrientationEventMaybe = DeviceOrientationEvent as unknown as {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

export function GyroPermission() {
  const [show, setShow] = useState(false)
  const [granted, setGranted] = useState(false)

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    if (!isMobile) return

    if (typeof DeviceOrientationEventMaybe.requestPermission === 'function') {
      setShow(true)
    } else {
      setGranted(true)
    }
  }, [])

  const requestPermission = async () => {
    const req = DeviceOrientationEventMaybe.requestPermission
    if (typeof req !== 'function') return
    try {
      const result = await req()
      if (result === 'granted') {
        setGranted(true)
        setShow(false)
        window.dispatchEvent(new Event('gyro-granted'))
      }
    } catch {
      setShow(false)
    }
  }

  return (
    <AnimatePresence>
      {show && !granted && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={requestPermission}
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 200,
            background: 'rgba(245,240,232,0.08)',
            border: '1px solid rgba(245,240,232,0.25)',
            color: 'rgba(245,240,232,0.7)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap',
          }}
        >
          Enable 3D Experience
        </motion.button>
      )}
    </AnimatePresence>
  )
}
