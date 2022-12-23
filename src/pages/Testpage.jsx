import React from 'react';

const Testpage = ({ text }) => {
  return (
    <div>
      <div> {text}</div>
      <Testpage>버튼</Testpage>
    </div>
  );
};

export default Testpage;
