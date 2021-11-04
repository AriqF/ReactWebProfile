import { Container, Table } from 'react-bootstrap';
import ResProg from './ResProg';

function ResTable(){
    return (
        <div className="page-section" id="profile">
            <Container>
                <h2 className="subheader-resume">Formal Education</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                Software Engineering <span className="text-muted"> - State University of Surabaya</span>
                                <br /> <span className="text-muted"><small>Surabaya - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2019 - Present
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Natural Science <span className="text-muted"> - SMAN 2 Gunungputri</span>
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2016 - 2019
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                An Nahl Junior High School
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2013 - 2016
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h2 className="subheader-resume">Non Formal Education</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                English Course <span className="text-muted"> - The British Institute</span>
                                <br /> <span className="text-muted"><small>Bogor - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2017 - 2018
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h2 className="subheader-resume">Certification and Awards</h2>
                <Table className="table-education" data-aos="fade-down" data-aos-duration="1000">
                    <tbody>
                        <tr>
                            <td className="td-org">
                                English TEP 517 <span className="text-muted"> - State University of Surabaya Language Center</span>
                                <br /> <span className="text-muted"><small>Surabaya - Indonesia</small></span>
                            </td>
                            <td className="td-year text-center">
                                2019 
                            </td>
                        </tr>
                        <tr>
                            <td className="td-org">
                                Contribution as a Delegate in World Study Abroad in Tokyo  <span className="text-muted"> - World Study Abroad</span>
                                <br /> <span className="text-muted"><small>Tokyo - Japan</small></span>
                            </td>
                            <td className="td-year text-center">
                                2018 
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <ResProg />
            </Container>
        </div>
    );
}

export default ResTable;