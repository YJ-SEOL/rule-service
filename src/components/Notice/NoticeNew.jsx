import React, { useMemo, useState, useEffect, useRef } from 'react';
import { CiCircleChevLeft } from 'react-icons/ci';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../scss/Notice/NoticeNew.scss';
// import AuthService from '../../common/auth/AuthService';

const NoticeNew = ({ path }) => {
  const quillRef = useRef();
  const [quillValue, setQuillValue] = useState('');
  const [t, setT] = useState('');
  // const user = AuthService.getCurrentUser();
  const { id } = useParams();
  const onChange = e => {
    const { value } = e.target;
    console.log(`value = ${e.target}`);
    setT(value);
  };
  console.log(`NoticeNewSetValue = ${quillValue}`);
  console.log(typeof t);
  // console.log(`user = ${user.department}`);
  console.log(`id = ${id}`);

  const navi = useNavigate();
  const goBack = () => {
    console.log('클릭');
    navi('/notices');
  };

  useEffect(() => {
    const fetchNotice = async () => {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:5000/notices/${id}`,
      });

      const { title, contents } = res.data;
      setQuillValue(contents);
      setT(title);
    };

    if (!id) {
      return;
    }
    fetchNotice();
  }, [id]);

  const HandleSumbit = async () => {
    // const { department } = user;
    const now = new Date().toISOString().substring(0, 10);
    const clock = new Date().toTimeString().split(' ')[0];
    const description = quillRef.current.getEditor().getText();
    console.log(`description`);
    console.log(t);
    // console.log(department);
    const newnotice = await axios({
      method: 'POST',
      url: `http://localhost:5000/notices/`,
      data: {
        title: t,
        // department: user.department,
        contents: description,
        view: 0,
        date: `${now} ${clock}`,
      },
    });
    console.log(`newnotice = ${newnotice}`);
    console.log(typeof description);
    console.log('제출');
    goBack();
  };

  const HandleEditSumbit = async () => {
    // const { department } = user;
    const now = new Date().toISOString().substring(0, 10);
    const clock = new Date().toTimeString().split(' ')[0];
    const description = quillRef.current.getEditor().getText();
    console.log(`description`);
    console.log(t);
    // console.log(department);
    const newnotice = await axios({
      method: 'PATCH',
      url: `http://localhost:5000/notices/${id}`,
      data: {
        title: t,
        // department: user.department,
        contents: description,
        view: 0,
        date: `${now} ${clock}`,
      },
    });
    console.log(`newnotice = ${newnotice}`);
    console.log(typeof description);
    console.log('제출');
    goBack();
  };
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
          { align: [] },
        ],
        ['image'],
      ],
    },
  }));

  return (
    <div className='noticeEdit'>
      <section className='noticeEdit__btn'>
        <CiCircleChevLeft type='button' onClick={goBack} />
        {path === '/' ? (
          <Button className='notice__backbtn' onClick={HandleSumbit}>
            등록
          </Button>
        ) : (
          <Button className='notice__backbtn' onClick={HandleEditSumbit}>
            수정
          </Button>
        )}
      </section>
      <section className='noticeEdit__edit'>
        <div className='noticeEdit__edit__title'>
          <strong>제목 : </strong>
          <input type='text' value={t} onChange={onChange} />
        </div>
        <ReactQuill
          ref={quillRef}
          theme='snow'
          modules={modules}
          value={quillValue}
          onChange={setQuillValue}
        />
      </section>
    </div>
  );
};

export default NoticeNew;
