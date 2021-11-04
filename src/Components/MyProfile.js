import myPhoto from '../assets/img/afr.jpg';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function MyProfile(){
    return (
        <div className="page-section" id="profile-header">
            <Container>
                <Row className="text-left align-items-center">
                    <Col xl={4} lg={12} md={12} id="img-section">
                        <img className="img-fluid" src={myPhoto} id="profile-pict" />
                    </Col>
                    <Col xl={8} lg={12} md={12} className="align-items-center" id="text-section">
                        <h1 id="hi">Hello, I'm <h1 className="fadeInRight" style={{backgroundColor: '#DA0037'}}>Ariq Fachry</h1></h1>
                        <p>Currently a third year vocational student at faculty of vocational in Surabaya State University, Indonesia. 
                            I have a strong interest in software development and game development. I also have quite experienced 
                            in web development especially in Front-End development. I am open for new opportunities and interesting
                            projects.
                        </p>
                        <div class="d-flex flex-row" id="project-buttons" style={{marginTop: '24px'}}>
                            <div class="p-2" style={{paddingLeft: '0 !important'}}>
                                <LinkContainer to="/contact">
                                    <Button variant="custom" className="btnr btnr-red">Contact Me</Button>
                                </LinkContainer>
                                
                            </div>
                            <div class="p-2">
                                <Button href="#projects" variant="custom" className="btnr btnr-trans">Projects</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyProfile;