import {mainMenu, Dialogue, stageCave, stageCave2, stageCave3, stageCave4,
    stageFire1, stageFire2, stageFire3, lastStage} from '../../assets/img/Projects/LaraTales';
import { Col, Row } from "react-bootstrap";

function LaraTalesGal(){
    return(
        <>
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
        </>
    )
}

export default LaraTalesGal;