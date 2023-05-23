import { Container, Row, Col } from "react-bootstrap";



export default function FooterComponent() {

  const currentYear = new Date().getFullYear();
  const gitUrl = "https://github.com/dradjai"

  return(
   <>
    <footer className="footer-container">
      <Container>
        <Row>
          <Col className="text-center">
       
        <p>&copy; {currentYear} by David Radjai</p>&nbsp;
        <a href={gitUrl}
        target="_blank"
        rel="noreferrer">GitHub</a>
          </Col>
        </Row>
      </Container>
    </footer>
   </>
   
    
  )
}
