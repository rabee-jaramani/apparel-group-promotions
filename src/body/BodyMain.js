import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UAEFlag } from '../assets/flags/uae.svg';
import { ReactComponent as KSAFlag } from '../assets/flags/ksa.svg';
import { ReactComponent as OmanFlag } from '../assets/flags/oman.svg';
import { ReactComponent as KuwaitFlag } from '../assets/flags/kuwait.svg';
import { ReactComponent as QatarFlag } from '../assets/flags/qatar.svg';
import { ReactComponent as BahrainFlag } from '../assets/flags/bahrain.svg';

export default function BodyMain() {
  return (
    <div className="body-main">
      <div className='countries-nav'>
        <NavLink to="/" activeclassname="active">
          <div className='country'>
            <UAEFlag className="flag-icon" />
            <p>UAE</p>
          </div>
        </NavLink>
        <NavLink to="/ksa" activeclassname="active">
          <div className='country'>
            <KSAFlag className="flag-icon" />
            <p>KSA</p>
          </div>
        </NavLink>
        <NavLink to="/oman" activeclassname="active">
          <div className='country'>
            <OmanFlag className="flag-icon" />
            <p>OMAN</p>
          </div>
        </NavLink>
        <NavLink to="/kuwait" activeclassname="active">
          <div className='country'>
            <KuwaitFlag className="flag-icon" />
            <p>KUWAIT</p>
          </div>
        </NavLink>
        <NavLink to="/qatar" activeclassname="active">
          <div className='country'>
            <QatarFlag className="flag-icon" />
            <p>QATAR</p>
          </div>
        </NavLink>
        <NavLink to="/bahrain" activeclassname="active">
          <div className='country'>
            <BahrainFlag className="flag-icon" />
            <p>BAHRAIN</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
