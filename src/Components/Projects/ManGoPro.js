import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgMango from '../../assets/img/mango.png';


function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid " src={imgMango} alt="mango-project"/>
            <Link to="/mango-details" className="projectLink">
                <h4>ManGo <span><small style={{fontSize: "0.5em"}}>(2021)</small></span></h4>
            </Link>
            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">HTML&CSS</Badge></div>
                    <div class="tag"><Badge bg="danger">Laravel</Badge></div>
                    <div class="tag"><Badge bg="danger">Javascript</Badge></div>
                    <div className="tag"><Badge bg="danger">MySQL</Badge></div> 
                </div>
                <p>
                    A website for all users to learn and study Japanese basic level. Created using
                    Laravel and MySQL as Database. This project is currently in progress
                </p>
            </div>
            {/* <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://github.com/AriqF/man-go" class="btnrs btnr-git"><i class="fab fa-github"></i> Github Repo</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default MoKaryaPro;