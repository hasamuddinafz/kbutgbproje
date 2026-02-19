import React, { useEffect } from 'react'
import cihatSeker from '../images/cihat-seker.jpg';
import mustafahalid from '../images/mustafa_halid.jpg'
import hakancengiz from '../images/Hakan_cengiz.jpg'
import hasanuygurturk from '../images/hasan_uygurtürk.webp'
import samethoca from '../images/samet-nohutcu.jpg'
import mustafabugday from '../images/msutafabuğday.webp'


import Aos from 'aos';
function BilimKurulu() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <div>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Bilim Kurulu</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafahalid} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Prof. Dr. MUSTAFA HALİD KARAARSLAN </h5>
                  <p className="card-text text-secondary mb-0">KARABÜK ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hakancengiz} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Prof. Dr. HAKAN CENGİZ</h5>
                  <p className="card-text text-secondary mb-0">KARABÜK ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hasanuygurturk} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Prof. Dr. HASAN UYGURTÜRK</h5>
                  <p className="card-text text-secondary mb-0">KARABÜK ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={cihatSeker} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi CİHAT ŞEKER</h5>
                  <p className="card-text text-secondary mb-0"> İZMİR BAKIRÇAY ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={samethoca} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi SAMET NOHUTÇU</h5>
                  <p className="card-text text-secondary mb-0"> KARABÜK ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafabugday} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi MUSTAFA BUĞDAY</h5>
                  <p className="card-text text-secondary mb-0"> KARABÜK ÜNİVERSİTESİ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BilimKurulu