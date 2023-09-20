import React from 'react'
import Layout from '../layouts'

const section1 = () => {
  return (
    <>
      <Layout>
        <div className=" pt-10 mb-10">
          <h1 className="text-center text-white text-[45px] md:text-[80px] font-normal font-bali py-3">
            Om&ensp;Swastiastu
          </h1>
          <p className="md:w-[86%] md:mx-auto text-center text-textPColor text-[15px] md:text-[22px] font-dm font-normal px-3 pt-5 mt-5">
            Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan
            Yang Maha Esa, perkenankan kami mengundang Bapak/Ibu/Saudara/i pada
            Upacara Manusa Yadnya Pawiwahan (Pernikahan) putra-putri kami.
          </p>
        </div>

        <div className="mb-10 px-1">
          <div className="mb-20 px-1">
            <div className="w-3/5 first-letter: mx-auto rounded-full">
              <img
                src="/images/profile/profile-1.jpeg"
                alt="Mandala Circle"
                className="w-full h-full object-contain object-center rounded-full"
              />
            </div>

            <div className="text-center text-textPColor mt-8">
              <h3 className="text-3xl lg:text-4xl font-berkshire mb-3">
                I Gede Made Galang Indra Putra
              </h3>
              <p className="font-dm leading-7 text-base">
                Putra Kedua dari Pasangan <br />
                Bpk. I Gede Made Ardana <br /> & <br />
                Ibu Ni Wayan Larashati
              </p>
              <p className="font-dm mt-3 text-base">
                Br. Munggal, Desa Kukuh, Marga, Tabanan
              </p>
            </div>
          </div>

          <div className="px-1">
            <div className="w-3/5 first-letter: mx-auto rounded-full">
              <img
                src="/images/profile/profile-1.jpeg"
                alt="Mandala Circle"
                className="w-full h-full object-contain object-center rounded-full"
              />
            </div>

            <div className="text-center text-textPColor mt-8">
              <h3 className="text-3xl lg:text-4xl font-berkshire mb-3">
                Ni Putu Kurnia Prasasti
              </h3>
              <p className="font-dm leading-7 text-base">
                Putra Kedua dari Pasangan <br />
                Bpk. I Putu Gede Rahmat Abdiarta <br /> & <br />
                Ibu Ni Putu Rinawati
              </p>
              <p className="font-dm mt-3 text-base">
                Br. Mambang Tengah, Desa Mambang Tabanan
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default section1
