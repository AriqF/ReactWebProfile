import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import MyProfile from './Components/MyProfile';
import Projects from './Components/Projects';
import {Link} from 'react-scroll'

function App() {

  useEffect(() => {
    AOS.init();
  });

  return (
    <> 
        <MyProfile />
        <Projects/>
    </>
  );
}

export default App;
