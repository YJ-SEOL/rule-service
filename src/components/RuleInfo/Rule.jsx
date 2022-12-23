import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../../scss/RuleInfo/Rule.scss';
import {
  BsInfoCircle,
  BsLayoutSplit,
  BsSquareHalf,
  BsWindow,
  BsDownload,
  BsPrinter,
} from 'react-icons/bs';
import AuthService from '../../common/auth/AuthService';

// const ruleInfo = () => {
//   return (
//     <Modal
//       show={open}
//       size='lg'
//       onHide={onClickBtn}
//       backdrop='static'
//       keyboard={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>contents</Modal.Body>
//       <Modal.Footer>
//         <Button variant='secondary' onClick={onClickBtn}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const Rule = () => {
  const [open, setOpen] = useState(false);
  const onClickBtn = () => {
    setOpen(!open);
  };
  const [ruleTitle, setRuleTitle] = useState(null);
  const [sidenav, setSidenav] = useState([]);
  const [content, setContent] = useState([]);
  const { id } = useParams();
  const user = AuthService.getCurrentUser();
  const today = new Date().toISOString().substring(0, 10);

  const navi = useNavigate();

  const dual = () => {
    // navi('/ruleinfo/dual');
    navi(`/dual/${id}`);
  };
  useEffect(() => {
    const fetchRule = async () => {
      const paramsId = id;
      const response = await axios({
        method: 'GET',
        url: `http://rms.sdenet.co.kr/Rule/${paramsId}`,
        // data: JSON.stringify({ id }),
      });

      const { department } = user; // 규정정보 부서 데이터
      console.log(`department = ${department}`);
      console.log(response.data);

      const { chapterRef, ruleName } = response.data;

      const chaptersNames = chapterRef.map(el => el.chapterName);
      setRuleTitle(ruleName);
      // setRule(response.data);
      setSidenav(chaptersNames);
      setContent(chapterRef);
    };
    fetchRule();
  }, [id]);
  return (
    <div className='ruleinfo__rule'>
      <nav className='rule__header'>
        <div className='rule__header__select'>
          <select className='form-select' aria-label='Default select example'>
            <option selected>2022.09.13</option>
            <option value='1'>2022.07.24</option>
            <option value='2'>2022.01.13</option>
            <option value='3'>2021.09.13</option>
          </select>
        </div>
        <div className='rule__header__btns'>
          <Button
            className='btns__item'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
            onClick={onClickBtn}>
            <span className='hide'>개정정보</span>
            <BsInfoCircle size={18} />
          </Button>
          {open ? (
            <Modal
              className='modal'
              backdropClassName='double'
              show={open}
              size='lg'
              onHide={setOpen}
              backdrop='static'
              keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>개정정보</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modal__body'>
                <Table>
                  <tr>
                    <th>분야</th>
                    <td>{ruleTitle}</td>
                  </tr>
                  <tr>
                    <th>담당부서</th>
                    <td>{user.department}</td>
                  </tr>
                  <tr>
                    <th>규정명</th>
                    <td>{ruleTitle}</td>
                  </tr>
                  <tr>
                    <th>제개정구분</th>
                    <td>개정</td>
                  </tr>
                  <tr>
                    <th>개정일</th>
                    <td>{today}</td>
                  </tr>
                  <tr>
                    <th>요약문</th>
                    <td>본 규정은 {today}에 개정되었습니다.</td>
                  </tr>
                </Table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={onClickBtn}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
          <Button className='btns__item' onClick={dual}>
            <span className='hide'>2단보기</span>
            <BsLayoutSplit size={18} />
          </Button>
          {/* <Modal
            className='modal'
            backdropClassName='double'
            show={open}
            size='lg'
            onHide={setOpen}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>2단 보기</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal__body'>
              <div className='modal__body__left'> 왼쪽</div>
              <div className='modal__body__right'> 오른쪽</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={onClickBtn}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
          <Button
            className='btns__item'
            onClick={() => console.log('신구대비')}>
            <span className='hide'>신구대비</span>
            <BsSquareHalf size={18} />
          </Button>
          <Button
            className='btns__item'
            onClick={() => console.log('전체보기')}>
            <span className='hide'>전체보기</span>
            <BsWindow size={18} />
          </Button>
          <Button
            className='btns__item'
            onClick={() => console.log('전문다운')}>
            {/* 바로 다운 */}
            <span className='hide'>전문다운</span>
            <BsDownload size={18} />
          </Button>
          <Button className='btns__item' onClick={() => console.log('인쇄')}>
            <span className='hide'>인쇄</span>
            <BsPrinter size={18} />
          </Button>
        </div>
      </nav>
      <div className='rule__body'>
        <div className='rule__body__sidenav'>
          <div className='sidenav__title'>
            <span style={{ fontSize: '12pt' }}>{ruleTitle && ruleTitle}</span>
          </div>
          <div className='sidenav__chapters'>
            {sidenav &&
              sidenav.map(chapter => (
                <span className='sidenav__chapters__item'>{chapter}</span>
              ))}
          </div>
        </div>
        <div className='rule__body__content'>
          <div className='content__title'>
            <span>{ruleTitle && ruleTitle}</span>
          </div>
          <div className='content__items'>
            {content &&
              content.map(el => (
                <>
                  <div className='content__item'>
                    <div className='content__item__title'>
                      <span>{el.chapterName}</span>
                    </div>
                    {el.titles.map(pl => (
                      <>
                        <div className='content__item__part'>
                          <div className='content__item__part__title'>
                            <span>{pl.title}</span>
                          </div>
                          <br />
                          <div>
                            {pl.contents.map(conel => (
                              <>
                                <span>{conel.subTitle}</span>
                                <p>{conel.content}</p>
                              </>
                            ))}
                          </div>
                          <br />
                        </div>
                        <br />
                      </>
                    ))}
                  </div>
                  <br />
                  <br />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule;
