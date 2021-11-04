import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import MyProfile from './Components/MyProfile';
import Projects from './Components/Projects';
import { HashRouter } from 'react-router-dom';

function App() {

  useEffect(() => {
    AOS.init();
  });

  return (
    <> 
      <HashRouter basename="/">
        <MyProfile />
        <Projects />
      </HashRouter>

    </>
  );
}

export default App;
