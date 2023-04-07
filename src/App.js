import Banner from './banner/Banner';
import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import './style.sass';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
