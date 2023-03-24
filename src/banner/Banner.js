import React from 'react';
import banner from '../assets/banner.jpg';
export default function Banner() {
  return (
    <div className="banner-cont">
      <img src={banner} alt="promotions banner" />
    </div>
  );
}
