import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../scss/MyPage/MyPageHeader.scss';

const MyPageHeader = () => {
  // const currentuser = AuthService.getCurrentUser();

  const [showMenu1, setshowMenu1] = useState(false);
  // const [showMenu2, setshowMenu2] = useState(false);
  // const [showMenu3, setshowMenu3] = useState(false);
  // const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // const user = AuthService.getCurrentUser();
    const userok = {
      accessToken: 'VCzeADA3Kz5fbWNIcHG4AP5H-KxKvteXKlp5ZI',
      user: {
        email: 'test2@mail.com',
        role: ['admin', 'rule', 'user'],
      },
    };

    if (userok) {
      // setCurrentUser(userok);
      console.log('user = ', userok);
      setshowMenu1(userok.user.role.includes('admin'));
      // setshowMenu2(userok.user.role.includes('rule'));
      // setshowMenu3(userok.user.role.includes('user'));
    }
  }, []);

  const navigate = useNavigate();
  const goProfile = () => {
    navigate('/mypage');
  };
  // const goRule = () => {
  //   navigate('/mypage/rulemain');
  // };
  const goAuth = () => {
    navigate('/mypage/ManagerAuth');
  };
  return (
    <div className='mypage'>
      <section className='mypage__pagemove'>
        <div className='mypage__pagemove__item'>
          <Button onClick={goProfile}>Profile</Button>
          {showMenu1 && <Button onClick={goAuth}>내 글 보기</Button>}
          {/* {showMenu1 && <Button onClick={goAuth}>권한</Button>} */}
          {/* {showMenu2 && <Button onClick={goRule}>제•개정</Button>}
          {showMenu3 && <Button>유저 Log</Button>}
          {currentUser && <Button>null</Button>} */}
        </div>
      </section>
    </div>
  );
};

export default MyPageHeader;
