
import checkedIcon from 'assets/images/checklist.png';
import personImg from 'assets/images/person-1.png'
import completeIcon from 'assets/images/icon_complete.png';
import priceIcon from 'assets/images/icon_price.png';
import twentyFourhrs from 'assets/images/icon_24hrs.png';
import profesionalIcon from 'assets/images/icon_professional.png';
import testimony1 from 'assets/images/testimony_photo_1.png';
import testimony2 from 'assets/images/testimony_photo_2.png';
import rating from 'assets/images/testimony_star_rating.png';
import btnArrowIconLeft from 'assets/images/testimony_left_button.png';
import btnArrowIconRight from 'assets/images/testimony_right_button.png';

const Home = (props) => {
    return (
        <>
            {/* start our services  */}
            <div id="our-services" className="section-first">
                <div className="section-first-wrapper">
                    <div className="section-first-img">
                        <img src={personImg} alt="persona-1" />
                    </div>
                    <div className="section-first-title">
                        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                            lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <ul>
                            <li>
                                <span><img style={{ verticalAlign: "text-top" }} src={checkedIcon} alt="checklist-icon" /></span>
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li>
                                <span><img style={{ verticalAlign: "text-top" }} src={checkedIcon} alt="checklist-icon" /></span>
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li>
                                <span><img style={{ verticalAlign: "text-top" }} src={checkedIcon} alt="checklist-icon" /></span>
                                Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li>
                                <span><img style={{ verticalAlign: "text-top" }} src={checkedIcon} alt="checklist-icon" /></span>
                                Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li>
                                <span><img style={{ verticalAlign: "text-top" }} src={checkedIcon} alt="checklist-icon" /></span>
                                Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* end our services  */}
            <div id="why-us" className="section-second">
                <div className="section-second-wrapper">
                    <h2>Why Us</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                    <div className="section-second-grid">
                        <div className="section-second-card">
                            <img src={completeIcon} alt="complete" />
                            <h3>Mobil Lengkap</h3>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                        <div className="section-second-card">
                            <img src={priceIcon} alt="price" />
                            <h3>Harga Murah</h3>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                        <div className="section-second-card">
                            <img src={twentyFourhrs} alt="price" />
                            <h3>Layanan 24 Jam</h3>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                        <div className="section-second-card">
                            <img src={profesionalIcon} alt="price" />
                            <h3>Sopir Profesional</h3>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="testimonials" className="testimonial">
                <div className="testimonial-title">
                    <p>Testimonial</p>
                </div>
                <div className="testimonial-desc">
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className="testimonial-list">
                    <div className="testimonial_block_side">
                        <div className="testimonial-photo">
                            <img src={testimony1} alt="Testimonial" />
                        </div>
                        <div className="testimonial-content">
                            <img src={rating} alt="Testimonial Rating"
                                className="testimonial-rating" />
                            <p className="testimonial-message">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt odit quas, ex
                                nostrum ipsa libero laborum rem doloremque optio a rerum doloribus reprehenderit dicta
                                molestias! Voluptatibus
                                reprehenderit asperiores placeat.
                            </p>
                            <p className="testimonial-account-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                    <div className="testimonial_block_center">
                        <div className="testimonial-photo">
                            <img src={testimony1} alt="Testimonial" />
                        </div>
                        <div className="testimonial-content">
                            <img src={rating} alt="Testimonial Rating"
                                className="testimonial-rating" />
                            <p className="testimonial-message">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt odit quas, ex
                                nostrum ipsa libero laborum rem doloremque optio a rerum doloribus reprehenderit dicta
                                molestias! Voluptatibus
                                reprehenderit asperiores placeat.
                            </p>
                            <p className="testimonial-account-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                    <div className="testimonial_block_side">
                        <div className="testimonial-photo">
                            <img src={testimony2} alt="Testimonial" />
                        </div>
                        <div className="testimonial-content">
                            <img src={rating} alt="Testimonial Rating"
                                className="testimonial-rating" />
                            <p className="testimonial-message">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt odit quas, ex
                                nostrum ipsa libero laborum rem doloremque optio a rerum doloribus reprehenderit dicta
                                molestias! Voluptatibus
                                reprehenderit asperiores placeat.
                            </p>
                            <p className="testimonial-account-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-arrow">
                    <button className="left-click">
                        <img src={btnArrowIconLeft} alt="Left Arrow" />
                    </button>
                    <button className="right-click">
                        <img src={btnArrowIconRight} alt="Right Arrow" />
                    </button>
                </div>
            </div>
            <div className="banner">
                <div className="cta-banner">
                    <div className="cta-title">
                        <span>Sewa Mobil di (Lokasimu) Sekarang</span>
                    </div>
                    <div className="cta-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <button></button>
                </div>
            </div>
            <div id="faq" className="faq">
                <div className="faq-wrap">
                    <div className="faq-title">
                        <h1>Frequently Asked Question</h1>
                        <div className="faqq">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="list-faq">
                        <div className="faq-item">
                            <h3 style={{ margin: 0, lineHeight: 3 }}>Apa saja syarat yang dibutuhkan?</h3>
                            <i className="bi bi-chevron-down faq-down-icon"></i>
                        </div>
                        <div className="faq-item">
                            <h3 style={{ margin: 0, lineHeight: 3 }}>
                                Berapa hari minimal sewa lepas kunci?
                            </h3>
                            <i className="bi bi-chevron-down faq-down-icon"></i>
                        </div>
                        <div className="faq-item">
                            <h3 style={{ margin: 0, lineHeight: 3 }}>Berapa hari sebelumnya sebaiknya booking sewa mobil?</h3>
                            <i className="bi bi-chevron-down faq-down-icon"></i>
                        </div>
                        <div className="faq-item">
                            <h3 style={{ margin: 0, lineHeight: 3 }}>Apakah ada biaya antar jemput?</h3>
                            <i className="bi bi-chevron-down faq-down-icon"></i>
                        </div>
                        <div className="faq-item">
                            <h3 style={{ margin: 0, lineHeight: 3 }}>Bagaimana jika terjadi kecelakaan</h3>
                            <i className="bi bi-chevron-down faq-down-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home