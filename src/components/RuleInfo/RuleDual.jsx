import axios from 'axios';

import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Select from 'react-select';

import '../../scss/RuleInfo/RuleDual.scss';
import { useParams } from 'react-router-dom';
// import authHeader from '../../common/auth/AuthHeader';

const RuleDual = () => {
  const [ruleTitle, setRuleTItle] = useState(null);
  const [content, setContent] = useState();
  const { id } = useParams();
  // console.log(ruleTitle);
  // console.log(content);
  const [list, setList] = useState();
  console.log(`response.data = ${JSON.stringify(list)}`);
  // const searchOpen = () => {
  //   setList(!list);
  // };

  const item = () => {
    setList();
    console.log(`item = ${item}`);
  };

  useEffect(() => {
    const fetchRule = async () => {
      const paramsId = id;
      const res = await axios({
        method: 'GET',
        url: `http://rms.sdenet.co.kr/Rule/${paramsId}`,
      });
      // console.log(`res.data = ${res.data}`);
      const { chapterRef, ruleName } = res.data;
      setRuleTItle(ruleName);
      setContent(chapterRef);

      const response = await axios({
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // ...authHeader(),
        },
        url: 'http://rms.sdenet.co.kr/All-categories',
      });
      // const { ruleName } = response.data;
      console.log(`response.data = ${JSON.stringify(response.data)}`);
      // console.log(`ruleRef = ${JSON.stringify(ruleRef)}`);
      // console.log(`category = ${JSON.stringify(category)}`);
      // console.log(`ruleName = ${JSON.stringify(ruleName)}`);
      setList(response.data);
    };
    fetchRule();
  }, [id]);

  return (
    <div className='dual'>
      <div className='dual__left'>
        {/* 검색창 */}
        <section className='search'>
          <InputGroup className='dual__left__search'>
            <Form.Control
              className='dual__left__search__searchBar'
              placeholder='규정 검색'
              onClick={() => {
                setList(!list);
              }}
            />

            <Button className='dual__left__search__searchBtn'>
              <BsSearch />
            </Button>
          </InputGroup>
          <div className='dual__left__search__toggle'>
            {list &&
              list.map(cate => (
                <span
                  key={cate.id}
                  className={`dual__left__search__toggle__list ${
                    list ? 'open' : ''
                  }`}>
                  {/* <NavLink to={`/dual/${cate.ruleId}`}> */}
                  {cate.ruleRef &&
                    cate.ruleRef.map(el => (
                      <li className='item__list'>{el.ruleName}</li>
                    ))}
                  {/* </NavLink> */}
                </span>
              ))}
          </div>
        </section>

        <section className='body'>
          <div className='body__title'>
            <h3>{ruleTitle && ruleTitle}</h3>
          </div>
          <div className='body__content'>
            {content &&
              content.map(el => (
                <div className='content__item' key={el.titles}>
                  <div className='content__item__title'>
                    <span>{el.chapterName}</span>
                  </div>
                  {el.titles.map(pl => (
                    <div className='content__item__part'>
                      <div className='content__item__part__title'>
                        <span>{pl.title}</span>
                      </div>
                      <div className='content__item__part__contents'>
                        {pl.contents.map(conel => (
                          <>
                            <span>{conel.subTitle}</span>
                            <p>{conel.content}</p>
                          </>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </section>
      </div>

      <div className='dual__right'>
        {/* 검색창 */}
        <section className='search'>
          {/* <InputGroup className='dual__right__search'>
            <Form.Control
              className='dual__right__search__searchBar'
              placeholder='규정 검색'
            />
            <Button className='dual__right__search__searchBtn'>
              <BsSearch />
            </Button>
          </InputGroup> */}
          <Select options={item} />
        </section>
        <section className='body'>
          <div className='body__title'>
            <h3>{ruleTitle && ruleTitle}</h3>
          </div>
          <div className='body__content'>
            {content &&
              content.map(el => (
                <div className='content__item'>
                  <div className='content__item__title'>
                    <span>{el.chapterName}</span>
                  </div>
                  {el.titles.map(pl => (
                    <div className='content__item__part'>
                      <div className='content__item__part__title'>
                        <span>{pl.title}</span>
                      </div>
                      <div className='content__item__part__contents'>
                        {pl.contents.map(conel => (
                          <>
                            <span>{conel.subTitle}</span>
                            <p>{conel.content}</p>
                          </>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RuleDual;
