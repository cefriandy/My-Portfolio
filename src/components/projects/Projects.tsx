import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

interface ProjectProps {
    filter: string;
    setFilter: (filter: string) => void;
    projects: Array<{ title: string; description: string; imageUrl: string; category: string }>;
    handleShow: (title: string, description: string) => void;
}

const Projects: React.FC<ProjectProps> = ({ filter, setFilter, projects, handleShow }) => {
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    return (
        <>
            <h2>Projects</h2>
            <Form.Group controlId="projectFilter" className="filter-group">
                <Form.Label>Filter by Category</Form.Label>
                <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)} className="custom-select">
                    <option value="All">All</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Data Science">Data Science</option>
                    {/* Add more categories as needed */}
                </Form.Control>
            </Form.Group>
            <Row>
                {filteredProjects.map((project, index) => (
                    <Col md={4} key={index} className="project-card">
                        <Fade triggerOnce>
                            <Card>
                                <Card.Img variant="top" src={project.imageUrl} className="project-image" />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleShow(project.title, project.description)}>
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Projects;