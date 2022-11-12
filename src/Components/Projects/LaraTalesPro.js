import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLaraTales from '../../assets/img/lara-tales.png';

function MoKaryaPro(){
    return(
        <div className="project-items">
            <img className="img-fluid " src={imgLaraTales} alt="lara-tales-project"/>
            <Link to="/laratales-details" className="projectLink">
                <h4>Lara Tales <span><small style={{fontSize: "0.5em"}}>(2021)</small></span> </h4> 
            </Link>

            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                    <div className="tag"><Badge bg="danger">C#</Badge></div> 
                </div>
                <p>
                    Lara Tales is an Action 2D Platformer game and consist several stages with enemy and bosses. This
                    game available on Windows platform only. 
                </p>
            </div>
            {/* <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://drive.google.com/file/d/1poOfYX7DmdFn_LYqgseGOMMWgYnp6rlj/view?usp=sharing" class="btnrs btnr-git"><i class="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default MoKaryaPro;