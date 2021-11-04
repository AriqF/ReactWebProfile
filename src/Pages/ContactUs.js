import { Col, Container, Row, Button } from "react-bootstrap";


function ContactUs(){
    return(
        <>
        <div className="page-section" id="contact-page">
            <Container>
                <h1 style={{fontSize: '32px'}}>Contact</h1>
                <h5 style={{marginBottom: '32px'}}>Very Happy To Have Further Discussion</h5>
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <form className="needs-validation" method="POST" encType="multipart/form-data" action="https://formspree.io/f/mjvjdkpy">
                            <div className="form-floating mb-3">
                                <input id="name" type="text" className="form-control" name="name"  required autoFocus />
                                <label for="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input id="email" type="email" className="form-control" name="email"  required autoFocus />
                                <label for="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input id="subject" type="text" className="form-control" name="subject"  required autoFocus />
                                <label for="subject">Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" name="message" style={{height: '140px'}}/>
                                <label for="message">Message</label>
                            </div>
                            <div className="d-flex flex-row">
                                <Button variant="custom" className="btnr btnr-red" type="submit" style={{padding:'12px 42px'}}>
                                    <i className="far fa-paper-plane"></i> Send
                                </Button>
                            </div>         
                        </form>
                    </Col>
                    <Col xl={6} lg={12} md={12} id="box-right">
                        <ul className="pl-0 fadeInDown" id="contacts-list" style={{listStyle:'none'}}>
                            <li ><i className="fas fa-phone-alt"></i> +62-8211-2725-688</li>
                            <li ><i className="fas fa-map-marked-alt"></i> Gunungputri, Bogor, West Java Indonesia</li>
                            <li ><i className="far fa-envelope"></i> ariqfachry2611@gmail.com</li>
                        </ul>
                        <div id="quotes" className="pl-0 fadeInUp">
                            <h4 className="text-muted">
                                "Skill is fine, and genius is splendid, but the rights contacts are more valuable than either"
                                <small>- Arthur Conan Doyle</small>
                            </h4>
                        </div>
                    </Col>
                </Row>           
           
            </Container>
       </div>
    </>
    );
}

export default ContactUs;