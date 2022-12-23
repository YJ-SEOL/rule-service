import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageHeader from './MyPageHeader';

const MyPageMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mypage'>
      <section className='mypage__profile' aria-label='profile'>
        <MyPageHeader />
        <Outlet />
      </section>
    </div>
  );
};

export default MyPageMain;
