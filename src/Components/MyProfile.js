import myPhoto from '../assets/img/afr.jpg';
import { Row, Col, Container } from 'react-bootstrap';

function MyProfile(){
    return (
        <div className="page-section" id="profile-header">
            <Container>
                <Row className="text-left align-items-center">
                    <Col xl={4} lg={12} md={12} id="img-section">
                    <img className="img-fluid" src={myPhoto} />
                    </Col>
                    <Col xl={8} lg={12} md={12} className="align-items-center">
                    <h2 id="hi">Hello, I'm <h2 className="fadeInRight" style={{backgroundColor: '#DA0037'}}>Ariq Fachry</h2></h2>
                    <p>Currently a third year vocational student at faculty of vocational in Surabaya State University, Indonesia. 
                        I have a strong interest in software development and game development. I also have quite experienced 
                        in web development especially in Front-End development. I am open for new opportunities and interesting
                        projects.
                    </p>
                    <div class="d-flex flex-row" id="project-buttons" style={{marginTop: '24px'}}>
                        <div class="p-2" style={{paddingLeft: '0 !important'}}>
                            <a href="#" class="btnr btnr-red">Contact Me</a>
                        </div>
                        <div class="p-2">
                            <a href="#" class="btnr btnr-trans">Projects</a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyProfile;