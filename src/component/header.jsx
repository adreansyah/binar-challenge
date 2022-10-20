import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'assets/images/logo-binar.svg'
import car from 'assets/images/img_car.png';

export const Header = ({ name, history, statusPencarian }) => {
    const navigate = useNavigate()
    const clickHandler = (e) => {
        navigate('/start-rent-car')
    }
    // console.log(statusPencarian)
    return (
        <div className="header">
            <nav className="navbar-binar">
                <img src={logo} alt="Binar" />
                <ul className="nav-menu">
                    <li className="nav-parent">
                        <Link href="#our-services">Our Services</Link>
                    </li>
                    <li>
                        <Link className='active-nav-menu' to="#why-us">Why Us</Link>
                    </li>
                    <li>
                        <Link className='active-nav-menu' to="#testimonials">Testimonial</Link>
                    </li>
                    <li>
                        <Link className='active-nav-menu' to="#faq">FAQ</Link>
                    </li>
                </ul>
                <div className="nav-responsive">
                    <span>
                        <i className="bi bi-list icon-bar-style"></i>
                    </span>
                </div>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                    </div>
                </div>
            </nav>
            <div className="hero-section" style={{ height: statusPencarian === "success" ? 200 : "auto" }}>
                {statusPencarian !== "success" && <div className="hero-section-left">
                    <p className="title-hero">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    <p className="title-desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {history.location.pathname !== "/start-rent-car" && <button type='button' onClick={clickHandler}>Mulai Sewa Mobil</button>}
                </div>}
                {statusPencarian !== "success" && <div className="hero-car">
                    <img src={car} alt="Mobil" />
                </div>}
            </div>
        </div>
    )
}