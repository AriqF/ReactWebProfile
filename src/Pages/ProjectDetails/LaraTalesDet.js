import { Badge, Col, Row } from "react-bootstrap";
import mainMenu from '../../assets/img/Projects/LaraTales/mainMenu.png';
import Dialogue from '../../assets/img/Projects/LaraTales/Dialogue.png';
import stageCave from '../../assets/img/Projects/LaraTales/stageCave.png';
import stageCave2 from '../../assets/img/Projects/LaraTales/stageCave2.png';
import stageCave3 from '../../assets/img/Projects/LaraTales/stageCave3.png';
import stageCave4 from '../../assets/img/Projects/LaraTales/stageCave4.png';
import stageFire1 from '../../assets/img/Projects/LaraTales/stageFire1.png';
import stageFire2 from '../../assets/img/Projects/LaraTales/stageFire2.png';
import stageFire3 from '../../assets/img/Projects/LaraTales/stageFire3.png';
import lastStage from '../../assets/img/Projects/LaraTales/lastStage.png';

function LaraTalesDet(){
    return(
        <>
            <div className="projectContainer">
                <div className="titleContainer">
                    <h2>Lara Tales</h2>
                    <div className="d-flex d-row text-center tag-container">   
                        <div class="tag pl-0"><Badge bg="danger">Unity</Badge></div>
                        <div className="tag"><Badge bg="danger">C#</Badge></div> 
                    </div>
                </div>
                <div className="bodyContainer">
                    <div className="details">
                        <Row>
                            <Col xl={6} md={12}>
                                <p>
                                    Lara Tales is an Action 2D Platformer game and consist several stages with enemy and bosses. 
                                    This game was my college assignment and consist of 3 members of team. In this project i took a 
                                    role as a main programmer while my other partners are documentation and story writer.
                                </p>
                            </Col>
                            <Col xl={6} md={12}>
                                <p>
                                    Library, Framework, and Tools used in this project:
                                    <div className="d-flex d-row tag-container justify-content-center">   
                                        <div class="tag "><Badge bg="danger">Unity</Badge></div>
                                        <div className="tag"><Badge bg="danger">GitHub</Badge></div> 
                                    </div>
                                    {/* <ul className="listLibrary">
                                        <li>Unity</li>
                                        <li>GitHub</li>
                                    </ul> */}
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="projectGallery">
                        <Row>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={mainMenu} alt="Lara Tales Main Menu"/>
                                    <figcaption className="imgCaption">Lara Tales Main Menu</figcaption>
                                </figure>
                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={Dialogue} alt="Lara Tales Dialogue"/>
                                    <figcaption className="imgCaption">Dialogue Sample</figcaption>
                                </figure>

                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageCave} alt="Lara Tales Cave Stage 1"/>
                                    <figcaption className="imgCaption">Stage 01 - Stage Cave</figcaption>
                                </figure>
                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageCave2} alt="Lara Tales Main Menu"/>
                                    <figcaption className="imgCaption">Stage 01 - Stage Cave</figcaption>
                                </figure>

                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageCave3} alt="Lara Tales Dialogue"/>
                                    <figcaption className="imgCaption">Stage 01 - Boss Fight</figcaption>
                                </figure>

                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageCave4} alt="Lara Tales Cave Stage 1"/>
                                    <figcaption className="imgCaption">Stage 01 - Boss Fight</figcaption>
                                </figure>
                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageFire1} alt="Stage 02"/>
                                    <figcaption className="imgCaption">Stage 02 - Stage Fire</figcaption>
                                </figure>

                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageFire2} alt="Stage 02"/>
                                    <figcaption className="imgCaption">Stage 02 - Stage Fire</figcaption>
                                </figure>

                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={stageFire3} alt="Stage 02"/>
                                    <figcaption className="imgCaption">Stage 02 - Boss Fight</figcaption>
                                </figure>
                            </Col>
                            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                                <figure>
                                    <img className="img-fluid galleryImg" src={lastStage} alt="Stage 03"/>
                                    <figcaption className="imgCaption">Stage 03</figcaption>
                                </figure>
                            </Col>
                        </Row>

                    </div>

                </div>

            </div>

        </>
    );
}

export default LaraTalesDet;