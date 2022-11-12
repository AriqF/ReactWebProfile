import myPhoto from '../assets/img/afr3.jpg';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-scroll'

function MyProfile(){
    const linkCV = 'https://drive.google.com/file/d/18W-kRKQpNkkYMl7pWmQSjLmckTa2bCi5/view?usp=share_link';

    return (
        <div className="page-section" id="profile-header">
            <Container>
                <Row className="text-left align-items-center">
                    <Col xl={4} lg={12} md={12} id="img-section">
                        <img className="img-fluid" src={myPhoto} id="profile-pict" alt="afr-profile-pict"/>
                    </Col>
                    <Col xl={8} lg={12} md={12} className="align-items-center" id="text-section">
                        <h1 id="hi">Hello, I'm <h1 className="fadeInRight" style={{backgroundColor: '#DA0037'}}>Ariq Fachry</h1></h1>
                        <p>
                            Currently a fourth year student in bachelor of applied science in informatics engineering at faculty of vocational in Universitas Negeri Surabaya, Indonesia. 
                            I have a strong interest in software development and had a set of skills and experiences in web development. I am open for new opportunities and interesting
                            projects.
                        </p>
                        <div class="d-flex flex-row" id="project-buttons" style={{marginTop: '24px'}}>
                            <div class="p-2" style={{paddingLeft: '0 !important'}}>
                                <a target="_blank" href={linkCV}>
                                    <Button variant="custom" className="btnr btnr-red">Download CV</Button>
                                </a>
                                
                            </div>
                            <div class="p-2">
                                <Link to="projects" spy={true} smooth={true} duration={50}>
                                    <Button variant="custom" className="btnr btnr-trans">Projects</Button>
                                </Link>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyProfile;