import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
    const handleSayHello = () => {
        window.location.href = 'mailto:cefriandysimarmata@gmail.com';
    };

    return (
        <Container className="contact">
            <Row>
                <Col>
                    <h2>Get In Touch</h2>
                    <p>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <Button variant="primary" onClick={handleSayHello}>
                        Say Hello
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;