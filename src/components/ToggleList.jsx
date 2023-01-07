import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../scss/ToggleList.scss';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';
// import authHeader from '../common/auth/AuthHeader';

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
              to={`/ruleinfo/rule/${rule.ruleNm}`}
              style={{ textDecoration: 'none', color: 'white' }}>
              <span className='togglecollapse__content__sub' key={rule.id}>
                {rule.ruleNm}
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
      const { id } = useParams();

      const response = await axios({
        method: 'GET',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        //   ...authHeader(),
        // },
        // url: 'http://localhost:8080/All-categories',
        // url: `https://apis.data.go.kr/6460000/ruleList/getRuleListList?serviceKey=HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww==&ruleOrganNm=녹색에너지연구원/${ruleKey}`,
        url: `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww%3D%3D${id}`,
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
          sidenav.map(cate => (
            <CollapseItem key={cate.ruleKey} cate={cate.ruleNm} />
          ))}
      </div>
    </div>
  );
};
export default ToggleList;
