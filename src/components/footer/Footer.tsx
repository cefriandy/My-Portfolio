import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file for custom styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;