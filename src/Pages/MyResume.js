import ResProfile from "../Components/ResProfile";
import ResTable from "../Components/ResTable";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function MyResume(){

    useEffect(() => {
        AOS.init();
        document.title = "Resume | AFR Web Profile";
      });

    return(
    <>
        <ResProfile />
        <ResTable />
    </>
    );
}

export default MyResume;