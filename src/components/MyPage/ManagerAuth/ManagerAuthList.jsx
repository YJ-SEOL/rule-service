import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../scss/MyPage/ManagerAuth/ManagerAuthList.scss';
// import { BsFillCaretUpFill } from 'react-icons/bs';
import { TiArrowSortedDown } from 'react-icons/ti';
import authHeader from '../../../common/auth/AuthHeader';

const CollapseItem = ({ cate }) => {
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(prev => !prev);
  };

  return (
    <div className='Authcollapse__item'>
      <div className='Authcollapse__header'>
        <span className='Authcollapse__title'>{cate && cate.category}</span>
        <span>
          <TiArrowSortedDown
            size='10'
            className={`Authcollapse__toggle ${clicked ? 'open' : ''}`}
            onClick={handleToggle}
          />
        </span>
      </div>
      <div className={`Authcollapse__content ${clicked ? 'open' : ''}`}>
        {cate.ruleRef &&
          cate.ruleRef.map(rule => (
            <span className='Authcollapse__content__sub' key={rule.id}>
              {rule.ruleName}
            </span>
          ))}
      </div>
    </div>
  );
};

const ManagerAuthList = () => {
  const [sidenav, setSidenav] = useState([]);

  useEffect(() => {
    const fetchSideNav = async () => {
      const response = await axios({
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeader(),
        },
        url: 'http://rms.sdenet.co.kr/All-categories',
      });
      console.log(response.data[0]);
      console.log(typeof response.data[0]);
      setSidenav(response.data);
    };
    fetchSideNav();
  }, []);
  return (
    <div className='ManagerAuthList'>
      <div className='Authcollapse'>
        {sidenav &&
          sidenav.map(cate => <CollapseItem key={cate.id} cate={cate} />)}
      </div>
    </div>
  );
};
export default ManagerAuthList;
