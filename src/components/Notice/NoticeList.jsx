import React, { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
import { Table, Button } from 'react-bootstrap';
// import { BsSearch } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import '../../scss/pagination.scss';

const NoticeTable = ({ notice }) => {
  return (
    <tr>
      <td>{notice.id}</td>
      <td>
        <NavLink to={`/notices/${notice.id}`}>{notice.title}</NavLink>
      </td>
      <td>none</td>
      <td>{notice.date}</td>
      <td> {notice.view}</td>
    </tr>
  );
};

const NoticeList = () => {
  const [create, setCreate] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();
  const goNew = () => {
    navigate('/notices/newnotice');
  };

  const [notices, setNotices] = useState([]); // axios로 받아온 데이터 저장

  // pagination
  const [page, setPage] = useState(1); // 현재페이지
  const [postPerPage] = useState(5); // 페이지 당 notice 개수
  const [currentNotiece, setCurrentNotice] = useState([1]); // 보여줄 notice
  const indexOfLastPost = page * postPerPage; // 1*10번 notice
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 10-10 = 0번 notice

  console.log(`currentNotice=${currentNotiece}`);
  const handlePageChange = page => {
    setPage(page);
    console.log(page);
  };

  useEffect(() => {
    const fetchNotice = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:5000/notices/',
      });
      const title = response.data;
      console.log(`title=${JSON.stringify(response.data)}`);
      // 역순으로 화면에 뿌리기 'reverse()'
      setNotices(title.length);
      setCurrentNotice(
        title.reverse().slice(indexOfFirstPost, indexOfLastPost)
      );
    };
    fetchNotice();
  }, [indexOfFirstPost, indexOfLastPost]);

  // useEffect(() => {
  //   setCurrentNotice(
  //     notices.reverse().slice(indexOfFirstPost, indexOfLastPost)
  //   );
  // }, [indexOfFirstPost, indexOfLastPost]);

  useEffect(() => {
    // const user = AuthService.getCurrentUser();
    const noticeok = {
      accessToken: 'VCzeADA3Kz5fbWNIcHG4AP5H-KxKvteXKlp5ZI',
      user: {
        email: 'test2@mail.com',
        role: ['notice'],
      },
    };
    if (noticeok) {
      setCurrentUser(noticeok);
      console.log(`noticeok = ${noticeok}`);
      setCreate(noticeok.user.role.includes('notice'));
    }
  }, []);

  return (
    <div>
      <section className='page__notice__search'>
        {create && (
          <Button className='page__notice__search__createbtn' onClick={goNew}>
            글쓰기
          </Button>
        )}
        {currentUser && null}
        {/* 검색창 */}
        {/* <InputGroup>
          <Form.Control
            className='page__notice__search__bar'
            placeholder='검색어를 입력하세요'
          />
          <Button className='page__notice__search__btn'>
            <BsSearch />
          </Button>
        </InputGroup> */}
      </section>
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
            {currentNotiece &&
              currentNotiece.map(notice => (
                <NoticeTable
                  key={notice.writer}
                  index={notice.id}
                  notice={notice}
                />
              ))}
          </tbody>
        </Table>
      </section>
      {/* 페이지네이션 */}
      <section className='page__notice__pagenation'>
        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={notices}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default NoticeList;
