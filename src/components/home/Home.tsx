import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profileImage from './profile.jpg';
import './Home.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Experiences from '../experience/Experiences';

interface HomeProps {
    activePage: string;
    theme: string;
}

const Home: React.FC<HomeProps> = ({ activePage, theme }) => {
    const [show, setShow] = React.useState(false);
    const [modalContent, setModalContent] = React.useState({ title: '', description: '' });
    const [filter, setFilter] = React.useState('All');

    const handleShow = (title: string, description: string) => {
        setModalContent({ title, description });
        setShow(true);
    };

    const handleClose = () => setShow(false);
    
    const projects = [
        { title: 'Project 1', description: 'Detailed description of Project 1.', category: 'Web Development', imageUrl: 'https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 2', description: 'Detailed description of Project 2.', category: 'Mobile Development', imageUrl: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 3', description: 'Detailed description of Project 3.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 4', description: 'Detailed description of Project 4.', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 5', description: 'Detailed description of Project 5.', category: 'Mobile Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 6', description: 'Detailed description of Project 6.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 3', description: 'Detailed description of Project 3.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 4', description: 'Detailed description of Project 4.', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 5', description: 'Detailed description of Project 5.', category: 'Mobile Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 6', description: 'Detailed description of Project 6.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 3', description: 'Detailed description of Project 3.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 4', description: 'Detailed description of Project 4.', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 5', description: 'Detailed description of Project 5.', category: 'Mobile Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 6', description: 'Detailed description of Project 6.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 3', description: 'Detailed description of Project 3.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 4', description: 'Detailed description of Project 4.', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 5', description: 'Detailed description of Project 5.', category: 'Mobile Development', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Project 6', description: 'Detailed description of Project 6.', category: 'Data Science', imageUrl: 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    const renderMainContent = () => {
        switch (activePage) {
            case 'Projects':
                return (
                    <Projects
                        filter={filter}
                        setFilter={setFilter}
                        projects={projects}
                        handleShow={handleShow}
                    />
                );
            case 'Experiences':
                return <Experiences />;
            case 'Contact':
                return <Contact />;
            case 'About':
            default:
                return <About />;
        }
    };

    return (
        <Container className={`home-container ${theme}`}>
            {/* Top Section */}
            <Row className="my-4 top-section">
                <Col md={6} className="text-section">
                    <h1 className="fade-in">Welcome to My Portfolio</h1>
                    <p className="fade-in delay-1">Hi, I'm Cefriandy Simarmata, a Backend Java Developer.</p>
                </Col>
                <Col md={6} className="image-section">
                    <img src={profileImage} alt="my profile" className="img-fluid profile-picture slide-in" />
                </Col>
            </Row>

            {/* Main Body */}
            <Row className="my-4">
                <Col>
                    {renderMainContent()}
                </Col>
            </Row>

            {/* Bottom Section */}
            <Row className="my-4">
                <Col>
                    <h2>Tech Stack</h2>
                    <Row>
                        <Col md={3} className="text-center">
                            <i className="bi bi-bootstrap" style={{ fontSize: '50px' }}></i>
                            <p>Bootstrap</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-filetype-tsx" style={{ fontSize: '50px' }}></i>
                            <p>TypeScript</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-filetype-js" style={{ fontSize: '50px' }}></i>
                            <p>JavaScript</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-node-plus" style={{ fontSize: '50px' }}></i>
                            <p>Nest JS</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className="text-center">
                            <i className="bi bi-filetype-java" style={{ fontSize: '50px' }}></i>
                            <p>Java</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-stars" style={{ fontSize: '50px' }}></i>
                            <p>Spring Boot</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-person-gear" style={{ fontSize: '50px' }}></i>
                            <p>Jenkins</p>
                        </Col>
                        <Col md={3} className="text-center">
                            <i className="bi bi-coin" style={{ fontSize: '50px' }}></i>
                            <p>Kubernetes</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className="text-center">
                            <i className="bi bi-boxes" style={{ fontSize: '50px' }}></i>
                            <p>Docker</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Modal for Project Details */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Home;