import { React, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../../scss/RuleInfo/RuleInfo.scss';
import RuleInfoHeader from './RuleInfoHeader';

const RuleInfoMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='ruleinfo'>
      <div className='ruleinfo__wrapper'>
        <RuleInfoHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default RuleInfoMain;
