import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Movies/>
    </div>
  );
}


export default App;
