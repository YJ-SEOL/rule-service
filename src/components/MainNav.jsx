import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import '../scss/MainNav.scss';
import Modal from 'react-bootstrap/Modal';
import Login from './LoginForm';
import MainNavSearchBar from './MainNavSearchBar';
import AuthService from '../common/auth/AuthService';

const MyVerticallyCenteredModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal'>
      <Modal.Header>
        <Modal.Title className='loginModal'>Login</Modal.Title>
        <GrClose closeButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  );
};

const MainNav = ({ path }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [open, setOpen] = useState(false);

  const user = AuthService.getCurrentUser();

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  // const goArticles = () => {
  //   navigate('/articles');
  // };

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      console.log(user);
    } else {
      setCurrentUser(undefined);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    // window.location = '/';
    goBack();
  };

  return (
    <header className='header'>
      <div className='header__button'>
        <button
          type='button'
          className='header__buttonStyleleft'
          onClick={goBack}>
          Rule-Service
        </button>
        {/* <span>|</span> */}
        {/* <button
          type='button'
          className='header__buttonStyleright'
          onClick={goArticles}>
          HMM
        </button> */}
      </div>

      <div className='header__search'>
        {path === '/' ? null : <MainNavSearchBar />}

        {currentUser && currentUser !== undefined ? (
          <span
            className={`header__search__logout ${open ? 'userDialog' : ''}`}
            onClick={() => {
              setOpen(!open);
            }}
            aria-hidden='true'>
            <FaUserCircle />
          </span>
        ) : (
          <Button
            className='header__search__login'
            onClick={() => setModalShow(true)}>
            logIn
            <FiLogIn />
          </Button>
        )}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {open ? (
          <Modal
            backdropClassName='UserInfo'
            className='UserInfoModal'
            show={open}
            size='sm'
            onHide={() => {
              setOpen(!open);
            }}>
            <div className='UserInfoModal__sec'>
              <Modal.Header>
                <Modal.Title>
                  <div className='UserInfoModal__sec__name'>
                    {user && user.email}
                  </div>
                </Modal.Title>
                <Button
                  className='UserInfoModal__sec__logoutBtn'
                  onClick={logout}>
                  <FiLogOut className='outicon' />
                </Button>
              </Modal.Header>
              <Modal.Body className='UserInfoModal__sec__UserInfo'>
                <NavLink to='/myPage'>My Page</NavLink>
              </Modal.Body>
            </div>
          </Modal>
        ) : null}
      </div>
    </header>
  );
};

export default MainNav;
