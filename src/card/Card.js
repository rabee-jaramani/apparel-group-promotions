import React from 'react';

export default function Card(item) {
  const el = item.item;
  return (
    <div className="card-cont">
      {/* 2022 has no images so do not show images */}
      {el.year === 2023 ? <img src={el.image} alt="default-ghgh" /> : ''}
      <div className="info-div">
        <p>
          <strong>Name</strong>
        </p>
        <p className="p-2">{el.name}</p>
        {/* <div className="line"></div> */}
      </div>
      <div className="info-div">
        <p>
          <strong>New Designation</strong>
        </p>
        <p className="p-2">{el.new_role}</p>
      </div>

      <div className="info-div">
        <p>
          <strong>Brand</strong>
        </p>
        <p className="p-2">{el.brand}</p>
      </div>

      <div className="info-div">
        <p>
          <strong>Region</strong>
        </p>
        <p className="p-2">{el.country}</p>
      </div>

      <div className="info-div">
        <p>
          <strong>Date</strong>
        </p>
        <p className="p-2">
          {el.year}
          {el.month ? `/${el.month}` : ''}
        </p>
      </div>
    </div>
  );
}
