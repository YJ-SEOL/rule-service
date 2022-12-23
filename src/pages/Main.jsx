import React from 'react';
import MainMenu from '../components/MainMenu';
import '../scss/Main.scss';
import MainSearchBar from '../components/MainSearchBar';

const Main = () => {
  return (
    <div>
      <MainSearchBar />
      <MainMenu />
    </div>
  );
};

export default Main;
