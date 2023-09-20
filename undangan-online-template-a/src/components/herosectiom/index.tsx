import { useState, useEffect, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const heroImage = ['/images/gallery/hero-1.jpeg', '/images/gallery/hero-2.jpeg']

export default function HeroSection({ children }: LayoutProps) {
  const [indexImage, setIndexImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImage((prepIndex) => (prepIndex + 1) % heroImage.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* content */}
      <div className="h-screen w-full grid grid-rows-[auto, 1fr] ">
        <div className="relative flex flex-col-reverse items-end justify-center">
          <div>
            {heroImage.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 z-20 ${
                  index === indexImage ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  transition: '3.3s ease-in-out',
                }}
              />
            ))}
            <div className="text-textPColor relative z-30 w-full flex flex-col justify-star">
              <div
                className="bg-bodyBg opacity-40 h-full w-full absolute backdrop-blur-sm blur-md"
                style={{ zIndex: -1 }}
              ></div>
              <div className="mt-5 mb-3">
                <img
                  src="/images/background/hiasan-top.png"
                  alt="Mandala Circle"
                  className="w-full h-full object-contain object-center"
                  style={{ zIndex: -1 }}
                />
              </div>
              <div className="my-3 text-center">
                <h6 className="text-textPColor text-4xl font-mea">Pawiwahan</h6>
                <h1 className="text-textPColor text-4xl font-berkshire mt-4">
                  Galang & Sasti
                </h1>
              </div>
              <div className="mt-3 mb-5">
                <img
                  src="/images/background/hiasan-bottom.png"
                  alt="Mandala Circle"
                  className="w-full h-full object-contain object-center"
                  style={{ zIndex: -1 }}
                />
              </div>
            </div>
          </div>
          <div className="relative z-50 h-full w-full">{children}</div>
        </div>
      </div>
    </>
  )
}
