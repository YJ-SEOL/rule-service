import React from 'react';
// import { BiNotification } from 'react-icons/bi';
// import { AiOutlineForm } from 'react-icons/ai';
import { MdNotificationAdd } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';

import '../scss/MainMenu.scss';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div>
      <div className='mainicon'>
        <NavLink to='ruleinfo'>
          <ImBooks className='mainicon__style' />
        </NavLink>
        {/* <NavLink to='rulenotice'>
          <BiNotification className='mainicon__style' />
        </NavLink> */}
        <NavLink to='notices'>
          <MdNotificationAdd className='mainicon__style' />
        </NavLink>
        {/* <AiOutlineForm className='mainicon__style' /> */}
        <NavLink to='mypage'>
          <FaUserCircle className='mainicon__style' />
        </NavLink>
        <p>규정정보</p>
        {/* <p>재•개정</p> */}
        <p>공지사항</p>
        {/* <p>서식</p> */}
        <p>마이페이지</p>
      </div>
    </div>
  );
};

export default MainMenu;
