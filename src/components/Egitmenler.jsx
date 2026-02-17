import React, { useEffect } from 'react';
import sametHocam from '../images/samet-nohutcu.jpg';
import cihatSeker from '../images/cihat-seker.jpg';
import fatihMehmetBostanli from '../images/fatih-mehmet-bostanli.jpg';
import ibrahimZorlu from '../images/ibrahim-zorlu.jpg';
import muharrem from '../images/muharrem.jpg';
import hasanTekin from '../images/hasanTekin.jpg';
import Aos from 'aos';

function Egitmenler() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    });
  })
  return (
    <div>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Eğitmenlerimiz</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={fatihMehmetBostanli} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Prof. Dr. Fatih Mehmet BOTSALI</h5>
                  <p className="card-text text-secondary mb-0">Emekli Öğretim Üyesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 " data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hasanTekin} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Doç. Dr. Hasan TEKİN</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={muharrem} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Doç. Dr. Muharrem Hilmi AKSOY</h5>
                  <p className="card-text text-secondary mb-0">Konya Teknik Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={cihatSeker} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi Cihat ŞEKER</h5>
                  <p className="card-text text-secondary mb-0">İzmir Bakırçay Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={sametHocam} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi Samet NOHUTÇU</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={ibrahimZorlu} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Yüksek Mühendis İbrahim ZORLU</h5>
                  <p className="card-text text-secondary mb-0">Karabük Teknokent TTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Egitmenler;
