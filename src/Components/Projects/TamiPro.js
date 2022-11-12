import imgProject from '../../assets/img/tami.png'
import React from 'react'
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TamiPro() {
    return(
        <div className="project-items">
            <img className="img-fluid " src={imgProject} alt="tami-project"/>
            <Link to="#" className="projectLink">
                <h4>TAMI <span><small style={{fontSize: "0.5em"}}>(2022)</small></span> </h4> 
            </Link>

            <div className="box-body">
                <div className="d-flex d-row text-center tag-container">   
                    <div class="tag pl-0"><Badge bg="danger">Typescript</Badge></div>
                    <div class="tag pl-0"><Badge bg="danger">NextJs</Badge></div>
                    <div className="tag"><Badge bg="danger">NestJs</Badge></div> 
                    <div className="tag"><Badge bg="danger">Swagger</Badge></div> 
                </div>
                <p>
                Web based application aimed for managing assets including its activites. 
                In this project team, i took the role as backend developer.
                </p>
            </div>
            {/* <div className="box-button">
                <div className="d-flex flex-row">
                    <div className="p-2" style={{paddingLeft: '0 !important'}}>
                    <a href="https://drive.google.com/file/d/1poOfYX7DmdFn_LYqgseGOMMWgYnp6rlj/view?usp=sharing" class="btnrs btnr-git"><i class="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
