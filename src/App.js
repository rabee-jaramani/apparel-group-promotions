import { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import './style.sass';
import arrowIcon from './assets/arrow-icon.svg';
function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Body />
      <Footer />
      {showTopBtn ? (
        <div className="btn-to-top" onClick={goToTop}>
          <img src={arrowIcon} width="20" alt="To Top" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
