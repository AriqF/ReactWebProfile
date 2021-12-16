//eslint-disable-next-line
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import LaraTalesGal from "../../Components/Projects/LaraTalesGal";

function LaraTalesDet(){
    document.title = "Projects | Lara Tales Detail";
    return(
        <>
        <Container>
            <div className="projectContainer">
                <div className="titleContainer">
                    <h2>Lara Tales</h2>
                    {/* <div className="d-flex d-row text-center tag-container">   
                        <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                        <div className="tag"><Badge bg="danger">C#</Badge></div> 
                    </div> */}
                </div>
                <div className="bodyContainer">
                    <div className="details">
                        <p>
                            Lara Tales is a simple action 2D platformer game and consist several stages with various enemy and bosses. 
                            There are also various traps that will challange the player to complete the stage.
                            This game was my college assignment and consist of 3 members of team. In this project I took a 
                            role as a main programmer while my other partners are story writer, map designer, and documentation.
                        </p>
                        <div className="buttonContainer d-flex flex-row justify-content-center">
                            <div class="p-2">
                                <a href="https://drive.google.com/file/d/1poOfYX7DmdFn_LYqgseGOMMWgYnp6rlj/view?usp=sharing"
                                variant="custom" className="btnr btnr-red">Download Game</a>  
                            </div>
                            {/* <div class="p-2">
                                <a href="#"
                                variant="custom" className="btnr btnr-trans">Library Details</a>  
                            </div> */}
                        </div>
                    </div>
                    <div className="projectGallery text-center">
                            <LaraTalesGal />
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
}

export default LaraTalesDet;