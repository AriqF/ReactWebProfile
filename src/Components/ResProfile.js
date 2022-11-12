import myPhoto from '../assets/img/afr2.png';
import { Row, Col, Container } from 'react-bootstrap';

function ResProfile(){
    return(
        <div className="page-section" id="profile-header">
            <Container>
                <Row className="text-left align-items-center">
                    <Col xl={4} lg={12} md={12} id="img-section">
                        <img className="img-fluid" src={myPhoto} id="profile-pict" alt="afr-profile-pict"/>
                    </Col>
                    <Col xl={8} lg={12} md={12} className="align-items-center" id="text-section">
                        <h1 id="hi">Hello, I'm <h1 className="fadeInRight" style={{backgroundColor: '#DA0037'}}>Ariq Fachry</h1></h1>
                        <p>
                        Currently a fourth year student in bachelor of applied science in informatics engineering at faculty of vocational in Universitas Negeri Surabaya. 
                        I have set of projects and internship experience to improve and strengthen my skills. During work, 
                        I used to work in help of tools such as GitHub for collaboration and version control and Notion to 
                        organize my work and schedule. In result, I able to provide the result of my work ahead of schedule. 
                        I am capable to work individually or with team and have the ability to communicate well.
                        </p>
                        <div className="text-left" id="personal">
                            <Row>
                                <Col xl={6} sm={6}>
                                    <p>
                                        <strong>Name: </strong>
                                        <span className="ip">Ariq Fachry Ramadhan</span>
                                    </p>
                                    <p>
                                        <strong>Date of Birth: </strong>
                                        <span className="ip">26 November 2001</span>
                                    </p>
                                </Col>
                                <Col xl={6} sm={6}>
                                    <p>
                                        <strong>Email: </strong>
                                        <span className="ip">ariqfachry2611@gmail.com</span>
                                    </p>
                                    <p>
                                        <strong>Phone: </strong>
                                        <span className="ip">+62-8211-2725-688</span>
                                    </p>
                                </Col>
                            </Row>
                            <div className="d-flex flex-row align-items-center text-center">
                                <a className="sns" href="https://www.linkedin.com/in/AriqFachry" style={{marginLeft: '0 !important'}}>
                                    <span className="fab fa-linkedin-in fa-2x"></span>
                                </a>
                                <a className="sns" href="https://github.com/AriqF">
                                    <span className="fab fa-github fa-2x"></span>
                                </a>
                                <a className="sns" href="https://instagram.com/ariq.fr" >
                                    <span className="fab fa-instagram fa-2x"></span>
                                </a>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResProfile;