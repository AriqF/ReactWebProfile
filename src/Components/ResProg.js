import { Row, Col, Container } from 'react-bootstrap';

function ResProg(){
    return(
    <>
        <h2 className="subheader-resume" style={{marginBottom: '22px'}}>Programming Skills</h2>
        <Container>
            <Row className="align-items-center d-flex flex-row">
                {/* <Col xl={3} lg={12} md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i className="devicon-html5-plain-wordmark text-center"></i>
                        </div>
                        <div class="p-1">
                            <i class="devicon-css3-plain-wordmark"></i>
                        </div>
                    </div>
                    <h4>HTML & CSS</h4>
                </Col> */}
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-nestjs-plain"></i>
                        </div>
                    </div>
                    <h4>NestJs</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-nextjs-original"></i>
                        </div>
                    </div>
                    <h4>NextJs</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-laravel-plain"></i>
                        </div>
                    </div>
                    <h4>Laravel</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-unity-original"></i>
                        </div>
                    </div>
                    <h4>Unity</h4>
                </Col>

                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-javascript-plain"></i>
                        </div>
                    </div>
                    <h4>Javascript</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-typescript-plain"></i>
                        </div>
                    </div>
                    <h4>Typescript</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-react-original"></i> 
                        </div>
                    </div>
                    <h4>ReactJs</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-php-plain"></i>
                        </div>
                    </div>
                    <h4>PHP</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-cplusplus-plain"></i>
                        </div>
                    </div>
                    <h4>C++</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-csharp-plain"></i>
                        </div>
                    </div>
                    <h4>C#</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-java-plain"></i>
                        </div>
                    </div>
                    <h4>Java</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                        <i class="devicon-python-plain"></i>
                        </div>
                    </div>
                    <h4>Python</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-mysql-plain"></i>
                        </div>
                    </div>
                    <h4>MySQL</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">
                            <i class="devicon-bootstrap-plain"></i>
                        </div>
                    </div>
                    <h4>Bootstrap</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">  
                            <i class="devicon-tailwindcss-plain"></i>
                        </div>
                    </div>
                    <h4>Tailwind</h4>
                </Col>
                <Col xl={3} lg={12}md={12} sm={12} className="prog-box" data-aos="zoom-in" data-aos-duration="1000"> 
                    <div class="d-flex flex-row">
                        <div class="p-1">  
                            <i class="devicon-materialui-plain"></i>
                        </div>
                    </div>
                    <h4>Material UI</h4>
                </Col>

            </Row>
        </Container>
    </>
    );
}

export default ResProg;