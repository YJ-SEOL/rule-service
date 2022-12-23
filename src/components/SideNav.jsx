/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
// import { FiSettings } from 'react-icons/fi';
// import { BiNotification } from 'react-icons/bi';
// import { AiOutlineForm } from 'react-icons/ai';
import { MdNotificationAdd } from 'react-icons/md';
import '../scss/SideNav.scss';
import ToggleList from './ToggleList';

const SideNav = ({ path }) => {
  const [open, setOpen] = useState(true);
  const [act, setAct] = useState('');
  const onClickSideBtn = type => {
    setOpen(!open);
    setAct(type);
  };
  // const isAct = path => {
  //   return window.location.pathname.startsWith(path);
  // };
  useEffect(() => {
    if (path === '/ruleinfo') {
      setOpen(true);
    }
  }, [path]);

  if (path !== '/') {
    return (
      <Nav className='sidenav'>
        <div className='sidenav__Icon'>
          <NavLink
            to='ruleinfo'
            className='sidenav__Icon__link'
            // active={isAct('/ruleinfo')}
          >
            <div
              className={`sidenav__Icon__link__block ${
                act === 'ruleinfo' ? 'openmenu' : ''
              }`}>
              <ImBooks
                className='sidenav__Icon__link__block__style'
                onClick={() => onClickSideBtn('ruleinfo')}
                aria-expanded={open}
              />
              <span>규정정보</span>
            </div>
          </NavLink>
          {/* <NavLink
            to='/rulenotice'
            className='sidenav__Icon__link'
            // active={isAct('/unde')}
          >
            <div
              className={`sidenav__Icon__link__block ${
                act === 'rulenotice' ? 'openmenu' : ''
              }`}>
              <BiNotification
                className='sidenav__Icon__link__block__style'
                onClick={() => onClickSideBtn('rulenotice')}
              />
              <span>제•개정</span>
            </div>
          </NavLink> */}
          <NavLink
            to='notices'
            className='sidenav__Icon__link'
            // active={isAct('/notice')}
          >
            <div
              className={`sidenav__Icon__link__block ${
                act === 'notice' ? 'openmenu' : ''
              }`}>
              <MdNotificationAdd
                className='sidenav__Icon__link__block__style'
                onClick={() => onClickSideBtn('notice')}
              />
              <span>공지사항</span>
            </div>
          </NavLink>
          {/* <NavLink
            to='/unde'
            className='sidenav__Icon__link'
            // active={isAct('/notice')}
          >
            <div
              className={`sidenav__Icon__link__block ${
                act === 'unde' ? 'openmenu' : ''
              }`}>
              <AiOutlineForm
                className='sidenav__Icon__link__block__style'
                onClick={() => onClickSideBtn('unde')}
              />
              <span>서식</span>
            </div>
          </NavLink> */}
        </div>
        {/* <div className='sidenav__setting'>
          <NavLink to='setting'>
            <div className='sidenav__setting__block'>
              <FiSettings className='sidenav__setting__block__Icon' />
            </div>
          </NavLink>
        </div> */}
        {path && path.includes('/ruleinfo') ? (
          <Collapse in={open} dimension='width' className='toggle'>
            <div className='toggle'>
              <div className='toggle__menu'>
                <ToggleList />
              </div>
            </div>
          </Collapse>
        ) : null}
      </Nav>
    );
  }
  return null;
};

export default React.memo(SideNav);
