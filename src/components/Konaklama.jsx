import React, { useEffect } from "react";
import KonaklamaYeri from "../images/konaklamayer.jpeg";
import Aos from "aos";

function Konaklama() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div>
      {/* Hero section with centered text */}
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="text-light p-5">
          <h1 className="poppins-bold">
            Etkinliğin ve Konaklamanın Yapılacağı Yer Bilgisi
          </h1>
        </div>
      </div>

      {/* Main content section with image and text */}
      <div className="container py-5">
        <div className="row d-flex align-items-center" data-aos="fade-up">
          {/* Column for the image */}
          <div className="col-lg-5 col-md-12 col-12 p-3">
            <img
              src={KonaklamaYeri}
              alt="Sosyal Yasam Merkezi"
              className="img-fluid rounded my-3 "
            />
          </div>

          {/* Column for the text content */}
          <div className="col-lg-7 col-md-12 col-12">
            <div className="container p-5 my-5">
              {/* Heading and paragraph */}
              <h1 className="pb-3">
                Etkinliğin ve Konaklamanın Yapılacağı Yer Bilgisi
              </h1>
              <p className="text-justified">
                Planlanan etkinlik, Karabük Üniversitesi Karabük Teknokent
                içerisinde yer alan etkinlik salonunda gerçekleştirilecektir.
                Etkinlik Merkezi 30 kişilik bir kapasiteye sahiptir. Söz konusu
                etkinlik için gerekli olabilecek bilgisayar, projeksiyon cihazı
                vs. gibi tüm ekipman ve cihazlar mevcuttur. Uygulamalı
                eğitimlerin gerçekleştirilmesi esnasında her grup için ayrı
                olarak düzenlenebilecek masa ve sandalye imkânı bulunmaktadır.
                Dinlenme aralarında çeşitli ikramlar verilecektir. Öğle arasında
                Karabük Teknokent imkanları doğrultusunda bütün katılımcılara
                yemek ikramında bulunulacaktır. Etkinliğe şehir dışından katılan
                eğitimci ve katılımcılar için Karabük Üniversitesi Konuk Evi
                kullanılacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konaklama;
