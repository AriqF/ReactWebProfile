import { Badge } from "react-bootstrap";
import imgLaraTales from '../../assets/img/lara-tales.png';


function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid project-img" src={imgLaraTales} />
            <h4>Lara Tales</h4>
            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                    <div className="tag"><Badge bg="danger">C#</Badge></div> 
                </div>
                <p>
                    Lara Tales is an Action 2D Platformer game. This game consist of several stages with enemy and bosses.
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