import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../scss/RuleNotice/RuleNoticeMain.scss';

const RuleNoticeMain = () => {
  return (
    <div className='page'>
      <main className='page__rulenotice'>
        <h1 className='page__rulenotice__title'>제•개정 현황</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default RuleNoticeMain;
