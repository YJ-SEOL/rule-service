import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Table, InputGroup, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const NoticeList = () => {
  const [create, setCreate] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();
  const goNew = () => {
    navigate('/notices/newnotice');
  };

  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotice = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:5000/notices/',
      });
      const title = response.data;
      console.log(`title=${JSON.stringify(response.data)}`);

      // 역순으로 화면에 뿌리기 'reverse()
      setNotices(title.reverse());
    };
    fetchNotice();
  }, []);

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
        <InputGroup>
          <Form.Control
            className='page__notice__search__bar'
            placeholder='검색어를 입력하세요'
          />
          <Button className='page__notice__search__btn'>
            <BsSearch />
          </Button>
        </InputGroup>
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
            {notices &&
              notices.map((notice, index) => (
                <NoticeTable key={notice.id} index={index} notice={notice} />
              ))}
          </tbody>
        </Table>
      </section>
      {/* 페이지네이션 */}
      <section className='page__notice__pagenation'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination justify-content-center'>
            <li className='page-item disabled'>
              <NavLink to='/' className='page-link'>
                Previous
              </NavLink>
            </li>
            <li className='page-item'>
              <NavLink to='/' className='page-link'>
                1
              </NavLink>
            </li>
            <li className='page-item'>
              <NavLink to='/' className='page-link'>
                2
              </NavLink>
            </li>
            <li className='page-item'>
              <NavLink to='/' className='page-link'>
                3
              </NavLink>
            </li>
            <li className='page-item'>
              <NavLink to='/' className='page-link'>
                Next
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default NoticeList;
