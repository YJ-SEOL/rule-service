import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../../scss/Notice/Notice.scss';

const Notice = () => {
  const [noticeTitle, setNoticetitle] = useState();
  const [nodate, setNoDate] = useState([]);
  const [content, setContent] = useState([]);
  const [nodepartment, setNoDepartment] = useState([]);
  const [views, setViews] = useState(0);
  const { id } = useParams();
  console.log(`id=${id}`);
  console.log(`noticeTitle=${noticeTitle}`);

  console.log(`views = ${views}`);

  const navi = useNavigate();
  const goBack = () => {
    navi('/notices');
  };
  const goEdit = () => {
    navi(`/notices/editnotice/${id}`);
  };

  const del = async () => {
    const remove = await axios({
      method: 'DELETE',
      url: `http://localhost:5000/notices/${id}`,
    });
    console.log(remove);
    goBack();
  };

  useEffect(() => {
    const fetchNotice = async () => {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:5000/notices/${id}`,
      });
      const { title, contents, date, department, view } = res.data;
      console.log(`title = ${res.data}`);

      const req = await axios({
        method: 'PUT',
        url: `http://localhost:5000/notices/${id}`,
        data: { ...res.data, view: res.data.view + 1 },
      });
      console.log(req.data);
      setNoticetitle(title);
      setNoDate(date);
      setContent(contents);
      setNoDepartment(department);
      setViews(view);
    };
    fetchNotice();
  }, []);

  const [btn, setBtn] = useState();
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
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
      setBtn(noticeok.user.role.includes('notice'));
    }
  }, []);

  return (
    <section className='notice'>
      {btn && (
        <section className='notice__btn'>
          <Button onClick={goEdit}>수정</Button>
          <Button onClick={del}>삭제</Button>
        </section>
      )}
      {currentUser && null}
      <Table>
        <tbody>
          <tr>
            <td colSpan={3}>
              <h4 className='notice__title'> {noticeTitle && noticeTitle}</h4>
            </td>
          </tr>
          <tr>
            <td>작성부서: {nodepartment && nodepartment}</td>
            <td>작성일: {nodate && nodate}</td>
            <td>조회수 : {views && views}</td>
          </tr>
          <tr>
            <td colSpan={3}>{content && content}</td>
          </tr>
        </tbody>
      </Table>

      <Button className='notice__backbtn' onClick={goBack}>
        목록
      </Button>
    </section>
  );
};

export default Notice;
