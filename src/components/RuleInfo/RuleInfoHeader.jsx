import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/RuleInfo/RuleInfoHeader.scss';

const RuleInfoHeader = () => {
  return (
    <nav className='rulelist__header' aria-label='breadcrumb'>
      <ol className='breadcrumb breadcrumb-line text-mute fs-6 fw-bold'>
        <li className='breadcrumb-item'>
          <NavLink to='/'>지침 및 내규</NavLink>
        </li>
        <li className='breadcrumb-item'>
          <NavLink to='/'>Library</NavLink>
        </li>
        <li className='breadcrumb-item text-muted' aria-current='page'>
          Data
        </li>
      </ol>
    </nav>
  );
};

export default RuleInfoHeader;
