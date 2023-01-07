import React from 'react';
import { CgUserlane } from 'react-icons/cg';
// import '../../scss/MyPage/UserInfo.scss';

import AuthService from '../../common/auth/AuthService';

const UserInfo = () => {
  const currentuser = AuthService.getCurrentUser();

  return (
    <div className='mypage'>
      <section className='mypage__profile' aria-label='profile'>
        <div className='mypage__profile__peo'>
          <CgUserlane
            className='mypage__profile__peo__avatar'
            alt='profile photo'
          />
        </div>
        <div className='mypage__profile__info'>
          <h3 className='mypage__profile__info__name'>
            {/* 유저 이름 */}
            {currentuser && currentuser.username}
          </h3>
          <h5 className='mypage__profile__info__email'>
            {/* 유저 이메일 */}
            <strong>E-Mail : </strong>
            {currentuser && currentuser.email}
          </h5>
          <p className='mypage__profile__info__etc'>
            {/* 권한 */}
            <strong>Rule : </strong>
            {currentuser && currentuser.roles}
          </p>
          <p className='mypage__profile__info__etc'>
            {/* 유저 부서명 */}
            <strong>Department : </strong>
            {currentuser && currentuser.department}
          </p>
          <p className='mypage__profile__info__etc'>
            {/* 유저 직함 */}
            <strong>Position : </strong>
            {currentuser && currentuser.position}
          </p>
          <p className='mypage__profile__info__etc'>
            {/* 유저 연락처 */}
            <strong>Contact : </strong>
            {currentuser && currentuser.email}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
