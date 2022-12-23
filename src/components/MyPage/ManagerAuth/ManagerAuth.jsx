import React from 'react';
// import { Table } from 'react-bootstrap';
import { Table, Button, InputGroup, Form } from 'react-bootstrap';
// import { BsSearch } from 'react-icons/bs';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import '../../../scss/MyPage/ManagerAuth/ManagerAuth.scss';
import ManagerAuthList from './ManagerAuthList';

const datas = [
  {
    user: '김00',
    dep: '기획부',
    view: 'false',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '이00',
    dep: '기획부',
    view: 'ture',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '박00',
    dep: '인사부',
    view: 'ture',
    print: 'ture',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '최00',
    dep: '인사부',
    view: 'false',
    print: 'ture',
    download: 'ture',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '정00',
    dep: '영업부',
    view: 'ture',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '김00',
    dep: '기획부',
    view: 'ture',
    print: 'ture',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '이00',
    dep: '기획부',
    view: 'false',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '박00',
    dep: '인사부',
    view: 'false',
    print: 'ture',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '최00',
    dep: '인사부',
    view: 'ture',
    print: 'ture',
    download: 'ture',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '정00',
    dep: '영업부',
    view: 'ture',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '박00',
    dep: '인사부',
    view: 'false',
    print: 'ture',
    download: 'false',
    notice: 'ture',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '최00',
    dep: '인사부',
    view: 'ture',
    print: 'ture',
    download: 'ture',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {
    user: '정00',
    dep: '영업부',
    view: 'ture',
    print: 'false',
    download: 'false',
    notice: 'false',
    rule: ['write', 'comment', 'examine', 'Approver'],
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const ManagerAuth = () => {
  return (
    <div className='userauth'>
      <h2>유저권한</h2>
      <section className='userauth__search'>
        <InputGroup className='userauth__Searchbar'>
          <Form.Control
            className='userauth__search__bar'
            placeholder='검색어를 입력하세요'
          />
          <Button className='userauth__search__btn'>
            {/* <BsSearch className='userauth__search__btn__icon' /> */}
            검색
          </Button>
        </InputGroup>
      </section>
      <section className='userauth__table'>
        <div className='userauth__table__list'>
          <h5>분야별 규정제목</h5>
          <div>
            {/* 규정 리스트 */}
            <ManagerAuthList />
          </div>
        </div>
        <Table className='userauth__table__check' class='table table-hover'>
          <div className='userauth__table__check__box'>
            <thead className='userauth__table__check__box__header'>
              <tr>
                <th scope='col'>사용자</th>
                <th scope='col'>부서</th>
                <th scope='col'>규정 열람</th>
                <th scope='col'>규정 인쇄</th>
                <th scope='col'>규정 다운</th>
                <th scope='col'>공지사항 작성</th>
                <th scope='col'>재개정</th>
              </tr>
            </thead>
            <tbody className='userauth__table__check__box__bottom'>
              {datas.map(data => (
                <tr>
                  <td>{data.user}</td>
                  <td>{data.dep}</td>
                  <td>
                    {data.view === 'ture' ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked />
                    )}
                  </td>
                  <td>
                    {data.print === 'ture' ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked />
                    )}
                  </td>
                  <td>
                    {data.download === 'ture' ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked />
                    )}
                  </td>
                  <td>
                    {data.notice === 'ture' ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked />
                    )}
                  </td>
                  <td className='userauth__table__check__box__bottom__button'>
                    <Button>작성</Button>
                    <Button>실무 검토</Button>
                    <Button>규정 검토</Button>
                    <Button>승인</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </Table>
      </section>
    </div>
  );
};

export default React.memo(ManagerAuth);
