import React from 'react'

export default function Card(item) {
    const el = item.item;
    return (
        <div className='card-cont'>
            {/* 2022 has no images so do not show images */}
            {el.year === 2023 ? <img src={el.image} alt='default-ghgh' /> : ''}
            <div className='info-div'>
                <p><strong>Name</strong></p>
                <p>{el.name}</p>
            </div>
            <div className='info-div'>
                <p><strong>New Designation</strong></p>
                <p>{el.new_designation}</p>
            </div>
            <div className='info-div'>
                <p><strong>Brand</strong></p>
                <p>{el.brand}</p>
            </div>
            <div className='info-div'>
                <p><strong>Region</strong></p>
                <p>{el.country}</p>
            </div>
            <div className='info-div'>
                <p><strong>Date</strong></p>
                <p>{el.year} / {el.month}</p>
            </div>

        </div>
    )
}
