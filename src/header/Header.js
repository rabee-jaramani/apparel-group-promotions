import React from 'react'
import ag_logo from '../assets/ag_logo.svg'
export default function Header() {
    return (
        <div className='header-cont'>
            <div className='logo-div'>
                <img src={ag_logo} alt='ag logo' />
            </div>
        </div>
    )
}
