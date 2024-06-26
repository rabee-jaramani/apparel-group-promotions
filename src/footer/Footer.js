import React from 'react';

export default function Footer() {
  return (
    <div className="footer-cont">
      <div class="logo-div">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://apparelglobal.com/en/"
        >
          <img
            src="/apparel-promotions/static/media/ag_logo.d91f35808d094cfb863c8a6d796e6bbc.svg"
            alt="ag logo"
          />
        </a>
      </div>

      <p className="powered-by">Powered By APPAREL GROUP {(new Date().getFullYear())}</p>
    </div>
  );
}
