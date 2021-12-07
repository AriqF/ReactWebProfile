import ManGoGal from "../../Components/Projects/ManGoGal";
import {Button} from "react-bootstrap";

function ManGoDet() {
    
    return(
        <>
            <div className="projectContainer">
                <div className="titleContainer">
                    <h2>ManGo</h2>
                    {/* <div className="d-flex d-row text-center tag-container">   
                        <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                        <div className="tag"><Badge bg="danger">C#</Badge></div> 
                    </div> */}
                </div>
                <div className="bodyContainer">
                    <div className="details">
                        <p>
                            ManGo is a website for all users are willing to learn and study Japanese basic level. ManGo provides
                            Japanese basic material such as Hiragana, Katakana, and basic conversation materials and quizes. 
                            Created using Laravel and MySQL as Database. <br />
                            In this project i took the role as Front-End Engineer and web content writer. This project also managed 
                            by scrum using Notion as the tools for increasing productivity and efficiency. 
                        </p>

                        
                        <div className="buttonContainer">
                            <a href="https://github.com/AriqF/man-go"
                            variant="custom" className="btnr btnr-red"><i class="fab fa-github"></i> Git Repository</a>  

                            {/* <Button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                            variant="custom" className="btnr btnr-trans"><i class="fas fa-book"></i> Library Details</Button>  
                            */}
                        </div>
                        
                    </div>
                    <div className="projectGallery text-center">
                        <ManGoGal />
                    </div>

                </div>

            </div>
        </>
    )
}

export default ManGoDet;