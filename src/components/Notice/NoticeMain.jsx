import React from 'react';
import '../../scss/Notice/NoticeMain.scss';

import { Outlet } from 'react-router-dom';

const NoticeMain = () => {
  return (
    <div className='page'>
      <main className='page__notice'>
        <h1 className='page__notice__title'>공지사항</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default NoticeMain;
