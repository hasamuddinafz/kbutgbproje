import Aos from 'aos';
import React, { useEffect } from 'react'

function EgitimProgrami() {
    useEffect(()=>{
        Aos.init({
          duration: 1000,
        });
      })
  return (
    <div>
        <div className="hero d-flex align-items-center justify-content-center">
            <div className="text-light p-5"><h1 className='poppins-bold'>EĞİTİM PROGRAMI</h1></div>
        </div>
        <div class="container py-9 py-lg-11 position-relative z-index-1 my-5 py-5" >
            <div class="row text-justified">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h5 class="mb-4 main-color poppins-bold aos-init aos-animate" data-aos="fade-up">Eğitim Programı</h5>
                    <div class="nav nav-pills flex-column aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up">
                        <button class="nav-link px-4 text-start mb-3 active" id="d1-tab" data-bs-toggle="tab" data-bs-target="#day1" type="button" role="tab" aria-controls="day1" aria-selected="true">
                            <span class="d-block fs-5 fw-bold">1. GÜN</span>
                            <span class="small">CUMARTESI 26 EKİM 2024</span>
                        </button>
                        
                        <button class="nav-link px-4 text-start" id="d2-tab" data-bs-toggle="tab" data-bs-target="#day2" type="button" role="tab" aria-controls="day2" aria-selected="false" tabindex="-1">
                            <span class="d-block fs-5 fw-bold">2. GÜN</span>
                            <span class="small">PAZAR 27 EKİM 2024</span>
                        </button>
                    </div>
                </div>
                
                <div class="col-lg-8 col-xl-7">
                    <div data-aos="fade-up" class="tab-content aos-init aos-animate" id="myTabContent">
                        <div class="tab-pane fade active show" id="day1" role="tabpanel" aria-labelledby="d1-tab">
                            <ul class="pt-4 list-unstyled mb-0">
                                <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">08:00 - 08:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Kayıt ve Açılış</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Dr. Öğr. Üyesi Samet NOHUTÇU
                                        </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Genel Bilgilendirme, Etkinlik Programının Amaç ve Hedefleri ile ilgili bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:00 - 09:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Bilimin Felsefesi ve Bilimsel Araştırma Metodolojisi</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Dr.Öğr. Üyesi Cihat ŞEKER
                                        </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Bilim felsefesinin temelleri ve bilimsel araştırma metodolojilerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; Bilimin doğası, bilgi üretme süreçleri, bilimsel yöntemler ve araştırma teknikleri hakkında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 -10:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Frascati Kılavuzuna göre Ar-Ge</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Prof.Dr. Fatih Mehmet BOTSALI</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Frascati Kılavuzu’nun temel prensipleri ve Ar-Ge faaliyetlerinin nasıl tanımlandığı, sınıflandırıldığı ve ölçüldüğü konularında derinlemesine bir bilgi aktarımını sağlamak amaçlanmaktadır. Bu kapsamda katılımcılar, Ar-Ge’nin ekonomik, sosyal ve bilimsel önemini kavrayacak ve bu faaliyetleri yönetme ve değerlendirme becerilerini geliştireceklerdir.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 -11:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Frascati Kılavuzuna göre Ar-Ge</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Prof.Dr. Fatih Mehmet BOTSALI</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Frascati Kılavuzu’nun temel prensipleri ve Ar-Ge faaliyetlerinin nasıl tanımlandığı, sınıflandırıldığı ve ölçüldüğü konularında derinlemesine bir bilgi aktarımını sağlamak amaçlanmaktadır. Bu kapsamda katılımcılar, Ar-Ge’nin ekonomik, sosyal ve bilimsel önemini kavrayacak ve bu faaliyetleri yönetme ve değerlendirme becerilerini geliştireceklerdir.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00 -12:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Literatür Taraması ve Hipotez Oluşturma</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Muharrem Hilmi AKSOY</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Bilimsel araştırma süreçlerinde hipotez oluşturma becerilerini kazandırmak amaçlanmaktadır. Bu kapsamda katılımcılara; Hipotez geliştirme, formüle etme, test etme ve analiz etme konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>

                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:45 - 14:00</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5 className='alert alert-success'>Öğle Arası</h5>
                                    </div>
                                </li>

                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00 -14:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Araştırmanın Planlanması ve Deneysel Tasarım</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Muharrem Hilmi AKSOY</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Bilimsel araştırma sürecinin nasıl planlanacağını ve yürütüleceğini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; Araştırma probleminin tanımlanmasından veri toplama, analiz etme ve sonuçların raporlanmasına kadar tüm aşamalarda bilgi ve beceri kazandırılması sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">15:00 -15:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Hazırlama ve Yürütme ile ilgili Bilimsel Etik Uygulamaları</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Dr. Öğr. Üyesi Cihat ŞEKER</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Bilimsel araştırma projeleri hazırlama ve yürütme süreçlerinde etik ilkeleri uygulamak ile ilgili bilgi verilmesi amaçlanmaktadır. Bu kapsamda katılımcılara; Bilimsel araştırma etiği, sorumluluklar ve bilgi güvenliği gibi konularda bilgi aktarımı sağlanacak ve bu ilkeleri projelerine nasıl entegre edebilecekleri anlatılacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">16:00 -16:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Yönetimi ve Takım Çalışması (Teorik)</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Hasan TEKİN</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Proje yönetimi süreçlerini anlatmak ve takım çalışması becerilerini geliştirmek amaçlanmaktadır. Bu kapsamda katılımcılara; Proje planlama, kaynak yönetimi, risk yönetimi ve takım dinamikleri konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00 -18:30 <br /> Ders Saati: 2</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Yönetimi ve Takım Çalışması (Uygulama)</h5>
                                        <p class="mb-0">
                                            <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> 
                                            <ul>
                                                <li>Doç. Dr. Hasan TEKİN</li>
                                                <li>Dr. Öğr. Üyesi Cihat ŞEKER</li>
                                                <li>Dr. Öğr. Üyesi Samet NOHUTÇU</li>
                                                <li>Yüksek Mühendis İbrahim ZORLU</li>
                                            </ul> 
                                         </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Proje yönetimi süreçlerini anlatmak ve takım çalışması becerilerini geliştirmek amaçlanmaktadır. Bu kapsamda katılımcılara; Proje planlama, kaynak yönetimi, risk yönetimi ve takım dinamikleri konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="d2-tab" data-aos="fade-up">
                            <ul class="pt-4 list-unstyled mb-0">
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">08:00 - 08:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5> <span className='poppins-bold second-color'>DERS ADI:</span> Ar-Ge Süreci Yönetimi</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Prof.Dr. Fatih Mehmet BOTSALI</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge süreçlerinin yönetimi ile ilgili temel prensipleri ve uygulamaları öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; Ar-Ge projelerinin planlanması, yürütülmesi, izlenmesi ve sonuçlandırılması konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:00 - 09:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> TÜBİTAK Ar-Ge Destek Programları</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Muharrem Hilmi AKSOY</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> TÜBİTAK tarafından sunulan Ar-Ge destek programlarını tanıtmak ve bu programlardan nasıl yararlanıcağını öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; TÜBİTAK’ın destek mekanizmaları, başvuru süreçleri, proje yönetimi ve raporlama gibi konularda bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 -10:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> TEYDEB Çağrı ve Başvuru Süreci</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Muharrem Hilmi AKSOY</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> TEYDEB tarafından sunulan çağrı ve başvuru süreçlerini tanıtmak amaçlanmaktadır. Bu kapsamda katılımcılara; TEYDEB destek programları, başvuru ve değerlendirme süreçleri, proje yönetimi ve raporlama konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 -11:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Uluslararası Destekler, Avrupa Birliği Fon ve Projeleri, Fikri Sınai Mülkiyet Hakları</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Yüksek Mühendis İbrahim ZORLU</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Katılımcılara uluslararası fon kaynaklarından faydalanma ve proje hazırlama becerilerini kazandırmak, Avrupa Birliği Fonlarına erişim ve AB projeleri sürecini anlatılacaktır. Bunun yanı sıra Fikri Mülkiyet kavramını tanıtmak ve önemini vurgulamak, Fikri Sınai Mülkiyet Haklarına ilişkin temel kavramları öğretmek, Fikri Mülkiyet Haklarının çeşitleri: Patent, telif hakkı, ticari marka, endüstriyel tasarım vb. konularında bilgi aktarımı sağlanacaktır. </p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00 -12:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Ar-Ge Proje Hazırlama</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Yüksek Mühendis İbrahim ZORLU</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge projelerinin nasıl hazırlanacağını, planlanacağını ve yürütüleceğini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; Ar-Ge projelerinin yazımı, başvuru süreçleri, yönetimi ve raporlanması konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:45 - 14:00</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5 className='alert alert-success'>Öğle Arası</h5>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00 -14:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Teknopark Proje Süreçleri</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Yüksek Mühendis İbrahim ZORLU</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Teknoparkların işleyişini, proje geliştirme süreçlerini ve yönetim metodolojilerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; Teknopak kavramı ve rolü, Proje geliştirme süreçleri, Finansman ve iş geliştirme, Performans ölçümü ve değerlendirme ve Sürdürülebilirlik ve Gelecek Perspektifleri ile ilgili bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">15:00 -15:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje İzleme Süreci</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Prof.Dr. Fatih Mehmet BOTSALI</p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Proje yönetimi çerçevesinde proje izleme ve kontrol süreçlerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; projelerin zamanında, bütçeye uygun ve belirlenen kalite standartlarında tamamlanmasını sağlamak için gerekli olan izleme teknikleri, araçları ve yöntemleri konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">16:00 -16:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Başvuru Uygulaması (Teorik)</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Doç. Dr. Muharrem Hilmi AKSOY  </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge, inovasyon ve diğer alanlarda proje başvurusu yapma süreçlerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; proje fikirlerini geliştirme, başvuru dökümanlarını hazırlama, değerlendirme kriterlerine uygun projeler yazma ve proje başvuru sistemlerini kullanma konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00 -17:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Başvuru Uygulaması (Uygulama)</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span>
                                            <ul>
                                                <li>Prof.Dr. Fatih Mehmet BOTSALI</li>
                                                <li>Dr. Öğr. Üyesi Cihat ŞEKER</li>
                                                <li>Doç. Dr. Muharrem Hilmi AKSOY</li>
                                                <li>Yüksek Mühendis İbrahim ZORLU</li>
                                            </ul> 
                                        </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge, inovasyon ve diğer alanlarda proje başvurusu yapma süreçlerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; proje fikirlerini geliştirme, başvuru dökümanlarını hazırlama, değerlendirme kriterlerine uygun projeler yazma ve proje başvuru sistemlerini kullanma konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                                <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                    <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">18:00 -18:45 <br /> Ders Saati: 1</span>
                                    <div class="flex-grow-1 ps-4 border-start border-3">
                                        <h5><span className='poppins-bold second-color'>DERS ADI:</span> Proje Başvuru Uygulaması (Uygulama)</h5>
                                        <p class="mb-0">
                                        <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> 
                                            <ul>
                                                <li>Prof.Dr. Fatih Mehmet BOTSALI</li>
                                                <li>Dr. Öğr. Üyesi Cihat ŞEKER</li>
                                                <li>Doç. Dr. Muharrem Hilmi AKSOY</li>
                                                <li>Yüksek Mühendis İbrahim ZORLU</li>
                                            </ul> 
                                        </p>
                                        <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge, inovasyon ve diğer alanlarda proje başvurusu yapma süreçlerini öğretmek amaçlanmaktadır. Bu kapsamda katılımcılara; proje fikirlerini geliştirme, başvuru dökümanlarını hazırlama, değerlendirme kriterlerine uygun projeler yazma ve proje başvuru sistemlerini kullanma konularında bilgi aktarımı sağlanacaktır.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default EgitimProgrami