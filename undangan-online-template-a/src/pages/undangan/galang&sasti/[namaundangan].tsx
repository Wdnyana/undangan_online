// pages/undangan/[namaundangan].tsx

import { useRouter } from 'next/router'
import { useState } from 'react'
import Popup from '../../../components/popup'
import Layout from '@/components/layouts'
import HeroSection from '@/components/herosectiom'

export default function HalamanUndangan() {
  const router = useRouter()
  const { namaundangan } = router.query
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      <HeroSection>
        <div className="text-textPColor d-flex justify-center items-center ">
          <Popup isOpen={isPopupOpen} onClose={closePopup}>
            <div className="text-center mb-7">
              <p className="font-dm text-base">
                Kepada Yth. <br />
                Bapak/Ibu/Saudara/i :
              </p>
              <h1 className="text-2xl lg:text-4xl font-berkshire my-4">
                {namaundangan}
              </h1>
              <p className="font-dm text-base">
                Mohon maaf apabila ada kesalahan penulisan nama/gelar
              </p>
            </div>
          </Popup>
        </div>
      </HeroSection>
      <Layout></Layout>
    </>
  )
}
