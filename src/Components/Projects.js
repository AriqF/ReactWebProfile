import MoKaryaPro from './Projects/MoKaryaPro';
import RingkasNetPro from './Projects/RingkasNetPro';
import ManGoPro from './Projects/ManGoPro';
import LaraTalesPro from './Projects/LaraTalesPro';
import { Row, Col, Container } from 'react-bootstrap';

function Projects(){
    return (
        <div className="page-section" id="projects">
            <Container>
                <div className="container-fluid text-center">
                    <h2 style={{marginTop: '48px'}}>My Projects</h2>
                    <p className="ls-1"><span style={{backgroundColor: '#DA0037', padding: '2px 12px 2px 12px'}}>Check Out a Few of My Lastest Projects</span></p>
                    <Row >
                    <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                        <MoKaryaPro />
                    </Col>
                    <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                        <RingkasNetPro />
                    </Col>
                    <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                        <ManGoPro />
                    </Col>
                    <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-in" data-aos-duration="1000">
                        <LaraTalesPro />
                    </Col>
                    </Row> 
                </div> 
            </Container>
        </div>
    );
}

export default Projects;