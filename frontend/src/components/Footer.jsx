import React from 'react';
import '../css/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <p>Copyright © 2024 Bluetail. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <a href="/aboutus">About Us</a>
                    <a href="/termsofservice">Terms of Service</a>
                </div>
                <div className="footer-section">
                    <a href="https://www.facebook.com/bluetailevents/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/bluetailbar/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    {/* Add more social media links as needed */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
