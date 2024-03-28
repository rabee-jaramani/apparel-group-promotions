import React from 'react'
import ag_logo from '../assets/ag_logo.svg'
export default function Header() {
    return (
        <div className='header-cont'>
            <div className='logo-div'>
                <a href='https://apparelglobal.com/en/' target='_blank' rel="noreferrer"><img src={ag_logo} alt='ag logo' /></a>
            </div>
        </div>
    )
}
