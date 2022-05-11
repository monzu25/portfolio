import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';


import { useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const ProjectDetailsView = () => {
    const { projectId } = useParams();

    const [project, setProject] = useState({});

    console.log(project);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProject(data.find(project => project.id === parseInt(projectId))));
    }, [projectId])



const handleClick = () => {
    window.open(project.liveUrl);
  };


    return (
        <div id="details" style={{ marginTop: "100px", textAlign: 'center' }}
            className="details container ">
            <h1 className="my-5">Project Details</h1>

            <div className="row  detailsView">
                <div className="col-6">
                    <div className="project-Image">
                        <img width="500px" src={project?.imgLink} alt="man" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="project_discription">
                        <div>
                            <h2>{project?.title}</h2>
                        </div>

                        <div className="feature_list text-start">
                            <ul>
                                <li>{project?.li1}</li>
                                <li>{project?.li2}</li>
                                <li>{project?.li3}</li>
                                <li>{project?.li4}</li>
                                <li>{project?.li5}</li>
                                <li>{project?.li6}</li>
                            </ul>
                        </div>
                    </div>
                  
                    <Nav.Link as={HashLink} target="_blank" to={project?.liveUrl}>   <button type="button" onClick={handleClick} className="projects-button">Visit My Site </button></Nav.Link>
                </div>
            </div>


        </div>
    );
};

export default ProjectDetailsView;