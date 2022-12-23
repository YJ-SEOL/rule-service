import React from 'react';
import { Button } from 'react-bootstrap';
import '../scss/MainSearchBar.scss';

const MainSearchBar = () => {
  return (
    <div className='mainserch'>
      <div className='mainserch__section'>
        <input
          className='mainserch__section__searchbar'
          placeholder='검색어를 입력하세요'
        />
        <Button className='mainserch__section__button'>검색</Button>
      </div>
    </div>
  );
};

export default MainSearchBar;
