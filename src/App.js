import Banner from './banner/Banner';
import Body from './body/Body';
import Header from './header/Header';
import './style.sass'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Body />
    </div>
  );
}

export default App;
