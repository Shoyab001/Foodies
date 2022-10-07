import logo from './logo.svg';
import './App.css';
import Navbar from './Component.js/Navbar';
import Banner from './Component.js/Banner.js';
import Topratebox from './Component.js/Topratebox.js';
import Videoarea from './Component.js/Videoarea.js';
import FeaturesArea from './Component.js/FeaturesArea.js';
import Menubox from './Component.js/Menubox.js';
import Chefbox from './Component.js/Chefbox.js';
import Blogbox from './Component.js/Blogbox.js';
import Detail from './Component.js/Detail.js';

function App() {
  return (
  <>
    <Navbar/>
    <Banner/>
    <Topratebox/>
    <Videoarea/>
    <FeaturesArea/>
    <Menubox/>
    <Chefbox/>
    <Blogbox/>
    <Detail/>

  </>
  );
}

export default App;
