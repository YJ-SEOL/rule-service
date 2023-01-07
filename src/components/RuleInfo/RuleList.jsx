import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../../scss/RuleInfo/RuleList.scss';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { Table } from 'react-bootstrap';

const RuleTr = ({ rule }) => {
  return (
    <tr>
      <td width='80%'>
        <NavLink
          to={`/ruleinfo/rule/${rule.ruleId}`}
          style={{ textDecoration: 'none', color: 'black' }}>
          {rule.ruleName}
        </NavLink>
      </td>
      <td width='10%' className='text-center'>
        <BsFileEarmarkPdf />
      </td>
      <td width='10%' className='text-center'>
        {rule.updatedAt2}
      </td>
    </tr>
  );
};

const DummyTr = () => {
  const len = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {len.map(el => (
        <tr key={el}>
          <td />
          <td className='text-center'>
            <BsFileEarmarkPdf />
          </td>
          <td className='text-center' />
        </tr>
      ))}
    </>
  );
};

const RuleList = () => {
  const [rules, setRules] = useState([]);
  const { id } = useParams();
  const { ruleKey } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchIndex = async () => {
      const response = await axios({
        method: 'GET',
        // url: `http://rms.sdenet.co.kr/Category/1`,
        url: `https://apis.data.go.kr/6460000/ruleList/getRuleListList?serviceKey=HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww==&ruleOrganNm=녹색에너지연구원/${ruleKey}`,
      });
      console.log(response.data);
      const categoriesData = response.data;
      setRules(categoriesData.ruleRef);
    };

    const fetchRules = async () => {
      const response = await axios({
        method: 'GET',
        // url: `http://rms.sdenet.co.kr/Category/${id}`,
        url: `https://apis.data.go.kr/6460000/ruleList/getRuleListList?serviceKey=HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww==&ruleOrganNm=녹색에너지연구원/${ruleKey}`,
      });
      console.log(response.data);
      const categoriesData = response.data;
      setRules(categoriesData.ruleRef);
    };

    if (id) {
      console.log(id);
      fetchRules();
      return;
    }
    fetchIndex();
  }, [id]);

  return (
    <div className='ruleinfo__rulelist'>
      <Table className='table rulelist__table'>
        <thead className='text-center'>
          <tr>
            <th scope='col' width='80%'>
              규정명
            </th>
            <th scope='col' width='10%'>
              원문
            </th>
            <th scope='col' width='10%'>
              제.개정일
            </th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {rules &&
            rules.map(rule => <RuleTr key={rule.ruleKey} rule={rule.ruleNm} />)}
          <DummyTr />
        </tbody>
      </Table>
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
    </div>
  );
};

export default RuleList;
