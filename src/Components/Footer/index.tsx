import React from 'react'
import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-content__logo-img-tex'>
          <img
            className='footer-content__logo-img'
            src="https://64.media.tumblr.com/83ccff07bf1dabfcfa8ca562d845be02/16a24e4dc85f36e5-4b/s75x75_c1/dd1fced80bb4787f8db24071a2edc026139e7fb8.pnj"
            alt=""
          />
          <div className='footer-content__logo-text'>food explorer</div>
        </div>
        <div className='footer-content__copyright'>
          © 2023 - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;