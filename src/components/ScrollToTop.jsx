import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.window.scrollTo(0, 0);
    console.log('up');
    const h = document.documentElement.scrollHeight;
    // const w = document.documentElement.clientWidth;
    const str = `h = ${h}`;
    console.log(str);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
