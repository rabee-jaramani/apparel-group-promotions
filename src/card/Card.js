import React from 'react'

export default function Card(item) {
    const { image, name, role_type, old_designation, new_designation } = item.item;
    return (
        <div className='card-cont'>
            <img src={image} alt='default-ghgh' />
            <div className='info-div'>
                <p><strong>Name</strong></p>
                <p>{name}</p>
            </div>
            <div className='info-div'>
                <p><strong>Role Type</strong></p>
                <p>{role_type}</p>
            </div>
            <div className='info-div'>
                <p><strong>Old Designation</strong></p>
                <p>{old_designation}</p>
            </div>
            <div className='info-div'>
                <p><strong>New Designation</strong></p>
                <p>{new_designation}</p>
            </div>

        </div>
    )
}
