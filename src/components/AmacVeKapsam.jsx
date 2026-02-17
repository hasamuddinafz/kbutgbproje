import React, { useEffect } from 'react';
import amac from '../images/aim.png';
import kapsam from '../images/kapsam.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';

function AmacVeKapsam() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <div>
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="text-light p-5"><h1 className='poppins-bold'>AMAÇ VE KAPSAM</h1></div>
      </div>
      <div className="container">
        <div className="row d-flex flex-column-reverse flex-md-row align-items-center justify-content-around m-5 bg-light" data-aos="fade-up">
          <div className="col-lg-4 col-md-6">
            <img src={amac} className='img-fluid' alt="" />
          </div>
          <div className="col-lg-6 col-md-6 p-3">
            <h1 className='main-color my-3 poppins-bold'>Amaç</h1>
            <p className='text-justified'>Düzenlenecek olan eğitimle birlikte Karabük Üniversitesinde eğitim gören lisans ve yüksek lisans öğrencileri ve yakın çevre illerde eğitim gören öğrencilere; başvuru yapabilecekleri destek programlarının tanıtımının yapılması, proje yazma becerilerinin geliştirilmesi ve proje yazabilme cesaretlerinin artırılması amaçlanmaktadır. Bu kapsamda katılım hakkı kazanan kişilere; düşünce aşamasında olan fikir ve projelerin olgunlaştırılması ile ilgili teorik ve pratik eğitimlerin verilmesi, yapılacak olan grup çalışmaları ile sürdürülebilir bir şekilde proje üretme vizyonunun oluşturulması ve TÜBİTAK tarafından desteklenen programlardan kabul alma noktasında önemli olan detayların anlatımı gerçekleştirilecektir.</p>
            <Link className='btn btn-custom-outline' to="https://docs.google.com/forms/d/e/1FAIpQLSehvXC8xOECG8IS9qcblUHdToKmmidHamA3VxO7Odwzal1Qxg/viewform" target='_blank' >Başvuru</Link>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-around m-5 bg-light" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 p-3">
            <h1 className='main-color my-3 poppins-bold'>Kapsam</h1>
            <p className='text-justified'>İki gün boyunca devam edecek olan teorik ve uygulamalı eğitimlerin sabah yapılacak olan oturumlarında ağırlıklı olarak teorik konular işlenecektir. Teorik eğitimlerde TÜBİTAK programlarının tanıtımı, Bilimin Felsefesi ve Bilimsel Araştırma Metodolojisi, Literatür Taraması ve Hipotez oluşturma, Proje Hazırlama ve Yürütme ile ilgili Bilimsel Etik Uygulamaları ve daha bir çok konuda bilgilerin aktarımı sağlanacaktır. Öğleden sonra yapılacak olan oturumlarda ise pratik konular üzerinde durulacaktır. Teorik eğitimlerde verilen bilgilerin pratik eğitimlerle pekiştirilmesi hedeflenmektedir. </p>
            <p className='text-justified'>Öğleden sonra gerçekleştirilecek olan pratik eğitimlerde belirli sayılarda kişilerden oluşan çalışma grupları oluşturulacak; böylelikle katılımcıların teorik eğitimlerde kazandığı bilgi birikimleri sayesinde bir proje protitipi oluşturması, bu prototipi oluştururken ekip olmanın öneminin anlaşılması ve proje yazma aşamasında önemli olan noktalar konusunda farkındalık kazanması sağlanacaktır. Proje kapsamında Karabük Üniversitesi ve yakın çevre illerde yer alan üniversitelerde eğitim gören lisans ve yüksek lisans öğrencilerinin kabulü gerçekleştirilecektir. Düzenlenecek olan bu bilimsel etkinlik kapsamında başvuru formunda yer alan kriterlere göre oluşturulan Puan Sıralama Tablosunda ilk 30 öğrenci asil olarak programa kabul edilecektir.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <img src={kapsam} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmacVeKapsam;
