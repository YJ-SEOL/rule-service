import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainNav from './components/MainNav';
import SideNav from './components/SideNav';
import MainSearchBar from './components/MainSearchBar';
import NotFound from './components/NotFound';
import Main from './pages/Main';
import RuleInfoMain from './components/RuleInfo/RuleInfoMain';
import RuleList from './components/RuleInfo/RuleList';
import Rule from './components/RuleInfo/Rule';
import RuleDual from './components/RuleInfo/RuleDual';
// import AuthService from './common/auth/AuthService';
// import RuleNoticeMain from './components/RuleNotice/RuleNoticeMain';
// import RuleNoticeList from './components/RuleNotice/RuleNoticeList';
// import PrivateRoute from './PrivateRoute';
import MyPageMain from './components/MyPage/MyPageMain';
import NoticeMain from './components/Notice/NoticeMain';
// import RuleMain from './components/MyPage/Rule/RuleMain';
// import RuleStatus from './components/MyPage/Rule/RuleStatus';
import UserInfo from './components/MyPage/UserInfo';
import NoticeList from './components/Notice/NoticeList';
import Notice from './components/Notice/Notice';
import NoticeNew from './components/Notice/NoticeNew';
// import ManagerAuth from './components/MyPage/ManagerAuth/ManagerAuth';
// import NewRule from './components/MyPage/Rule/NewRule';
// import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const location = useLocation().pathname;

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <MainNav path={location} />
      {/* <ScrollToTop /> */}
      <SideNav path={location} />
      <Routes>
        {/* 메인화면 */}
        <Route path='/' element={<Main />}>
          <Route index element={<MainSearchBar />} />
        </Route>
        {/* 마이페이지 */}
        <Route path='/mypage' element={<MyPageMain />}>
          {/* 유저 info */}
          <Route index element={<UserInfo />} />
          {/* 유저 권한 */}
          {/* <Route path='managerauth' element={<ManagerAuth />} /> */}
          {/* 재개정관리자 */}
          {/* <Route path='rulemain' element={<RuleMain />}>
            <Route index element={<RuleStatus />} />
            <Route path='newrule' element={<NewRule />} />
          </Route> */}
          {/* <Route path=':id' element={<newRule />} /> */}
        </Route>
        {/* <Route path='*' element={<NotFound />} /> */}
        {/* 규정정보 */}
        <Route
          path='/ruleinfo'
          element={
            // <PrivateRoute>
            <RuleInfoMain />
            // </PrivateRoute>
          }>
          <Route index element={<RuleList />} />
          <Route path='category/:id' element={<RuleList />} />
          <Route path='rule/:id' element={<Rule />} />
          {/* <Route path='dual' element={<RuleDual />} /> */}
        </Route>
        {/* 규정정보 2단보기 */}
        <Route path='dual/:id' element={<RuleDual />} />

        {/* 제•개정 */}
        {/* <Route
          path='/rulenotice'
          element={
            <PrivateRoute>
              <RuleNoticeMain />
            </PrivateRoute>
          }>
          <Route index element={<RuleNoticeList />} />
        </Route> */}
        {/* 공지사항 */}
        <Route
          path='/notices'
          element={
            // <PrivateRoute>
            <NoticeMain />
            // </PrivateRoute>
          }>
          <Route index element={<NoticeList />} />
          {/* 공지사항 상세페이지 이동 */}
          <Route path=':id' element={<Notice />} />
          {/* 새 공지사항 쓰기 */}
          <Route path='newnotice' element={<NoticeNew />} />
          {/* 공지사항 수정 */}
          <Route path='editnotice/:id' element={<NoticeNew />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
