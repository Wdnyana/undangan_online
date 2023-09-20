import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* content */}
      <div className="h-screen w-full grid grid-rows-[auto, 1fr] ">
        <div className="relative">
          <div className="fixed inset-0 z-10 overflow-hidden">
            <motion.div
              className={`flex justify-center items-center h-full md:w-[92%] lg:w-[40%] xl:w-[30%] md:mx-auto animate-spin-slow w-full bg-cover bg-center`}
              style={{
                animationIterationCount: 'infinite',
              }}
            >
              <img
                src="/images/background/mandala-bg-top.png"
                alt="Mandala Circle"
                className="w-full h-full object-contain object-center"
                style={{ zIndex: 6 }}
              />
            </motion.div>
          </div>
          <div className="fixed inset-0 z-0 overflow-hidden">
            <motion.div
              className={`flex justify-center items-center h-full md:w-[92%] lg:w-[40%] xl:w-[30%] md:mx-auto w-full bg-cover bg-center`}
            >
              <img
                src="/images/background/mandala-bg-bottom.png"
                alt="Mandala Circle"
                className="w-full h-full object-contain object-center"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          </div>
          <div className="relative z-20 h-full w-full">{children}</div>
        </div>
      </div>
    </>
  )
}
