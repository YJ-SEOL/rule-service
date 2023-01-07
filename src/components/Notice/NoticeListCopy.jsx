import React, { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
// import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';

const NoticeTable = ({ notice, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <NavLink to={`/notices/${notice.id}`}>{notice.title}</NavLink>
      </td>
      <td>none</td>
      <td>{notice.date}</td>
      <td> {notice.view}</td>
    </tr>
  );
};
const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page);
  };
  return (
    <section>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </section>
  );
};

const NoticeListCopy = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotice = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:5050/pagenationtest/',
      });
      const title = response.data;
      console.log(`title=${JSON.stringify(response.data)}`);

      // 역순으로 화면에 뿌리기 'reverse()
      setNotices(title.reverse());
    };
    fetchNotice();
  }, []);

  // useEffect(() => {
  //   // const user = AuthService.getCurrentUser();
  //   const noticeok = {
  //     accessToken: 'VCzeADA3Kz5fbWNIcHG4AP5H-KxKvteXKlp5ZI',
  //     user: {
  //       email: 'test2@mail.com',
  //       role: ['notice'],
  //     },
  //   };
  //   if (noticeok) {
  //     setCurrentUser(noticeok);
  //     console.log(`noticeok = ${noticeok}`);
  //     setCreate(noticeok.user.role.includes('notice'));
  //   }
  // }, []);

  return (
    <div>
      {/* <section className='page__notice__search'>
        {create && (
          <Button className='page__notice__search__createbtn' onClick={goNew}>
            글쓰기
          </Button>
        )}
        {currentUser && null}
      </section> */}
      {/* 공지사항 리스트 */}
      <section className='page__notice__list'>
        <Table>
          <tbody>
            <tr>
              <td>No.</td>
              <td>title</td>
              <td>writer</td>
              <td>date</td>
              <td>views</td>
            </tr>
            {notices &&
              notices.map((notice, index) => (
                <NoticeTable key={notice.id} index={index} notice={notice} />
              ))}
          </tbody>
        </Table>
      </section>
      {/* 페이지네이션 */}
      <Paging />
    </div>
  );
};

export default NoticeListCopy;
