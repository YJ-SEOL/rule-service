import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../../scss/MyPage/Rule/RuleMain.scss';

const RuleMain = () => {
  const navigate = useNavigate();
  const goNew = () => {
    navigate('/mypage/rulemain/newrule');
  };
  return (
    <div className='rulemain'>
      <section className='rulemain__btn'>
        <Button onClick={goNew}>작성</Button>
        <Button>제출</Button>
        <Button>검토</Button>
        <Button>반려</Button>
        <Button>승인대기</Button>
        <Button>제•개정대기</Button>
      </section>

      <Outlet />
    </div>
  );
};

export default RuleMain;
