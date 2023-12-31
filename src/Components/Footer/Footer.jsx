import React from 'react';
import '../Footer/footer.css';
import Facebook from '../../assets/ico-facebook.png';
import Instagram from '../../assets/ico-instagram.png';
import WhatsApp from '../../assets/ico-whatsapp.png';
import Tiktok from '../../assets/ico-tiktok.png';
import DH from '../../assets/DH.png';

const Footer = () => {
  return (
    <footer className="Footer">
    <section className="DigitalHouse">
      <div className="RedesSociales">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={Facebook} alt='facebook-logo' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={Instagram} alt='instagram-logo' />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img src={WhatsApp} alt='whatsapp-logo' />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <img src={Tiktok} alt='tiktok-logo' />
        </a>
      </div>

      <div className="Logo">
        <img src={DH} alt='DH' />
      </div>
    </section>
</footer>

  )
}

export default Footer
