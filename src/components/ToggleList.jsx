import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../scss/ToggleList.scss';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import authHeader from '../common/auth/AuthHeader';

const CollapseItem = ({ cate }) => {
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(prev => !prev);
  };

  return (
    <div className='togglecollapse__item'>
      <div className='togglecollapse__header'>
        <span className='togglecollapse__title'>
          <NavLink
            to={`/ruleinfo/category/${cate.categoryId}`}
            style={{ textDecoration: 'none', color: 'white' }}>
            {cate && cate.category}
          </NavLink>
        </span>
        <span>
          <BsFillCaretUpFill
            className={`togglecollapse__toggle ${clicked ? 'open' : ''}`}
            onClick={handleToggle}
          />
        </span>
      </div>
      <div className={`togglecollapse__content ${clicked ? 'open' : ''}`}>
        {cate.ruleRef &&
          cate.ruleRef.map(rule => (
            <NavLink
              to={`/ruleinfo/rule/${rule.ruleId}`}
              style={{ textDecoration: 'none', color: 'white' }}>
              <span className='togglecollapse__content__sub' key={rule.id}>
                {rule.ruleName}
              </span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

const ToggleList = () => {
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
        url: 'http://localhost:8080/All-categories',
      });
      console.log(response.data[0]);
      console.log(typeof response.data[0]);
      setSidenav(response.data);
    };
    fetchSideNav();
  }, []);
  return (
    <div className='toggleList'>
      <div className='togglecollapse'>
        {sidenav &&
          sidenav.map(cate => <CollapseItem key={cate.id} cate={cate} />)}
      </div>
    </div>
  );
};
export default ToggleList;
