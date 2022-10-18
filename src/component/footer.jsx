import React from 'react';
import facebook from 'assets/images/icon_facebook.png';
import instagram from 'assets/images/icon_instagram.png';
import twitter from 'assets/images/icon_twitter.png';
import mail from 'assets/images/icon_mail.png';
import twitch from 'assets/images/icon_twitch.png';
import { Link } from 'react-router-dom';
const Footer = (props) => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-address">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="footer-tab">
                    <Link to="#">Our services</Link>
                    <Link to="#">Why Us</Link>
                    <Link to="#">Testimonial</Link>
                    <Link to="#">FAQ</Link>
                </div>
                <div className="footer-socials">
                    <p>Connect with us</p>
                    <div className="footer-button">
                        <Link to="#"><img src={facebook} alt="img-facebook" /></Link>
                        <Link to="#"><img src={instagram} alt="img-instagram" /></Link>
                        <Link to="#"><img src={twitter} alt="img-twitter" /></Link>
                        <Link to="#"><img src={mail} alt="img-mail" /></Link>
                        <Link to="#"><img src={twitch} alt="img-twitch" /></Link>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright Binar 2022</p>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer