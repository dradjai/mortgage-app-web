import { Container, Row, Col } from "react-bootstrap";



export default function FooterComponent() {

  const currentYear = new Date().getFullYear();

  return(
   <>
    <footer className="footer-container">
      <Container>
        <Row>
          <Col className="text-center">
       
        <p>&copy; {currentYear} by David Radjai</p>
          </Col>
        </Row>
      </Container>
    </footer>
   </>
   
    
  )
}
