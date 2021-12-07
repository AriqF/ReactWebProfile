import { Col, Row } from "react-bootstrap";
import { adminQuizList, dashboardAdmin, dashboardUser, hiragana, indexPage, login, profile, quiz,
    quizList, ratingList} from '../../assets/img/Projects/ManGo'

function ManGoGal(){
    return(
        <>
        <Row>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={indexPage} alt="ManGo index page"/>
                    <figcaption className="imgCaption">Index Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={login} alt="Login page"/>
                    <figcaption className="imgCaption">Login Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={dashboardUser} alt="User page"/>
                    <figcaption className="imgCaption">User Dashboard</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={hiragana} alt="Hiragana page"/>
                    <figcaption className="imgCaption">Hiragana Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={quizList} alt="Quiz List page"/>
                    <figcaption className="imgCaption">Quiz List Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={quiz} alt="Quiz page"/>
                    <figcaption className="imgCaption">Quiz Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={profile} alt="profile page"/>
                    <figcaption className="imgCaption">Edit Profile Page</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={dashboardAdmin} alt="Admin page"/>
                    <figcaption className="imgCaption">Dashboard Admin</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={ratingList} alt="Rating List page"/>
                    <figcaption className="imgCaption">Admin Rating List</figcaption>
                </figure>
            </Col>
            <Col xl={4} lg={4} md={6} xs={12} className="galleryItem" data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img className="img-fluid galleryImg" src={adminQuizList} alt="Admin Quiz page"/>
                    <figcaption className="imgCaption">Admin Quiz Page</figcaption>
                </figure>
            </Col>
        </Row>
        </>
    )
}

export default ManGoGal;