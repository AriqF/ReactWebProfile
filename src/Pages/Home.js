import { useEffect } from 'react';
import MyProfile from '../Components/MyProfile';
import Projects from '../Components/Projects';

function Home() {
  useEffect(() => {
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
