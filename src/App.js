import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './banner/Banner';
import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import './style.sass';
import arrowIcon from './assets/arrow-icon.svg';
<<<<<<< Updated upstream
=======
import UAE from './body/UAE';
import KSA from './body/KSA';
import BodyMain from './body/BodyMain';
import KUWAIT from './body/KUWAIT';
import OMAN from './body/OMAN';
import QATAR from './body/QATAR';
import BAHRAIN from './body/BAHRAIN';

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======

  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <BodyMain />

        <Routes>
          <Route path="/" element={<UAE />} />
          <Route path="/ksa" element={<KSA />} />
          <Route path="/kuwait" element={<KUWAIT />} />
          <Route path="/oman" element={<OMAN />} />
          <Route path="/qatar" element={<QATAR />} />
          <Route path="/bahrain" element={<BAHRAIN />} />
        </Routes>

        <Footer />
        {showTopBtn && (
          <div className="btn-to-top" onClick={goToTop}>
            <img src={arrowIcon} width="20" alt="To Top" />
          </div>
        )}
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
