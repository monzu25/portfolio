import { height } from 'dom-helpers';
import React from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';

const Projects = () => {


    const projects = [
        {
            id: 101,
            title: "Aryan Look (Sunglass Niche Site)",
            li1: "Product details are visualized from the database",
            li2: "The client has to log in to purchase items.",
            li3: "A dashboard access variation for admin and client based on role",
            li4: "li4",
            li5: "li5",
            imgLink: "https://i.ibb.co/pJ9QprD/as12.png",
            liveUrl: "assignment-12th-aryan-look-about-sunglass-by-monzu.netlify.app",
            serverCodeUrl: "https://github.com/monzu25/Niche-Site-Sunglass",
            clientCodeUrls: "https://github.com/monzu25/Niche-Sunglash-Client--Side"

        },
        {
            id: 102,
            title: "Health Care",
            li1: "There Are Show Core Facilities Of A Medica Services",
            li2: "I have Visualize Doctors Profile",
            li3: "HomePage have A Header, Slider, Services, Footer.",
            li4: "li4",
            li5: "li5",
            imgLink: "https://i.ibb.co/55Shvb3/ass10-1.png",
            liveUrl: "https://assignment-10th-healthcare-by-monzu.netlify.app/",
            serverCodeUrl: "https://github.com/monzu25/health-care",
            clientCodeUrls: "https://github.com/monzu25/health-care"

        },
        {
            id: 103,
            title: "Global Tour",
            li1: "Service details data are fetched from the database.",
            li2: "The client has to log in to purchase items.",
            li3: "There different menus for for product managment",
            li4: "li4",
            li5: "li5",
            imgLink: "https://i.ibb.co/GJCdDDg/Ass11.png",
            liveLink: "https://github.com/monzu25/Niche-Site-Sunglass",
            serverCodeUrl: "https://github.com/monzu25/Global-Travel",
            clientCodeUrls: "https://github.com/monzu25/Global-travel-client"

        },

        {
            id: 104,
            title: "Body Shap (Gym Site)",
            li1: "The website make With Pure javascript, HTMl, CSS",
            li2: "I have showed some important Features on The site",
            li3: "And Also I have make a Price/Package section ",
            li4: "li4",
            li5: "li5",
            imgLink: "https://i.ibb.co/51R0V92/html-css-responsive-gym-by-monzu-netlify-app.png",
            liveLink: "https://monzu25.github.io/Body-shape-Gym-Site-/",
            serverCodeUrl: "https://github.com/monzu25/Body-shape-Gym-Site-",
            clientCodeUrls: "https://github.com/monzu25/Body-shape-Gym-Site-"

        }

    ]


    return (
        <div id="projects" className="projects container my-5 animate__animated animate__fadeInLeft">
            <h1 className="text-center text-danger">My Assignment Projects</h1>
            <Row xs={1} md={2} lg={2} className="g-4 my-5">
                {projects.map((project) => (
                    <Col>
                        <Card key={project.id}>
                            <Card.Img style={{ height: "95%", marginBottom: "30px" }} variant="top" src={project?.imgLink} />
                            <Card.Body style={{ marginBottom: "20px" }}>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>{project?.li1}</li>
                                        <li>{project?.li2}</li>
                                        <li>{project?.li3}</li>

                                    </ul>
                                </Card.Text>
                            </Card.Body>


                            <Nav.Link as={HashLink} to={`/detailsView/${project.id}`}>   <button type="button" className="projects-button">Read More  </button></Nav.Link>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Projects;