import React, { useState, useEffect, ReactNode } from 'react'

interface PopupProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Delay konten muncul dengan timeout (contoh: 500ms)
      const timeout = setTimeout(() => {
        setContentVisible(true)
      }, 5000)

      // Bersihkan timeout jika popup ditutup sebelum konten muncul
      return () => {
        clearTimeout(timeout)
      }
    } else {
      // Reset visibilitas konten saat popup ditutup
      setContentVisible(false)

      // Set elemen body kembali ke overflow: visible saat popup ditutup (di sisi klien)
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'visible'
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  // Set elemen body ke overflow: hidden saat popup terbuka (di sisi klien)
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }

  return (
    <div
      className="popup-overlay h-screen w-full flex justify-center items-center content"
      style={{ zIndex: isOpen ? 10 : -1 }}
    >
      <div
        className="bg-bodyBg opacity-70 h-screen w-full absolute"
        style={{ zIndex: -1 }}
      ></div>
      <div
        style={{ zIndex: 5 }}
        className={`md:w-1/2 popup-content ${contentVisible ? 'visible' : ''}`}
      >
        {children}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="close-button bg-buttonBg text-lg py-2 px-7 rounded-3xl md:px-content"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
