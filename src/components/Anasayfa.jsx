import React from 'react';

import video from '../images/back.mp4'

function Anasayfa() {
  return (
    <div>
      <header>
        <div className="overlay"></div>
        <video src={video} playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Karabük Teknokent Teknoloji Transfer Ofisi
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 poppins-bold">Fikirden Ticarileşmeye: Teknoloji Tabanlı Girişimcilikte Ticarileşme
                Stratejileri İhtisas Kampı</h1>
              <p className="lead mb-0">Karabük Teknokent Teknoloji Transfer Ofisi</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Anasayfa;