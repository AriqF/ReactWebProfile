import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import MyProfile from '../Components/MyProfile';
import Projects from '../Components/Projects';

function Home() {
  useEffect(() => {
    AOS.init();
    document.title = "Home | AFR Web Profile";
  });

  return (
    <> 

        <MyProfile />
        <Projects/>
    </>
  );
}

export default Home;
