import { Badge } from "react-bootstrap";
import imgMango from '../../assets/img/mango.png';


function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid " src={imgMango} />
            <h4>ManGo</h4>
            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                    <div className="tag"><Badge bg="danger">C#</Badge></div> 
                </div>
                <p>
                    A website for all users to learn and study Japanese basic level. Created using
                    Laravel and MySQL as Database. This project is currently in progress
                </p>
            </div>
            <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://github.com/AriqF/MoKarya" class="btnrs btnr-git"><i class="fab fa-github"></i> Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoKaryaPro;