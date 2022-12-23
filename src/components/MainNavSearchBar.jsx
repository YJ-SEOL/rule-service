import Form from 'react-bootstrap/Form';
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import '../scss/MainNavSearchBar.scss';

const MainNavSearchBar = () => {
  return (
    <InputGroup className='MainNavSearchbar'>
      <Form.Control
        className='MainNavSearchbar__input'
        placeholder='검색어를 입력하세요'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
      />
      <Button className='MainNavSearchbar__btn'>검색</Button>
    </InputGroup>
  );
};

export default MainNavSearchBar;
