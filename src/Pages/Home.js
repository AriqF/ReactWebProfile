import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import MyProfile from '../Components/MyProfile';
import Projects from '../Components/Projects';
import {Link} from 'react-scroll'

function Home() {

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

export default Home;
