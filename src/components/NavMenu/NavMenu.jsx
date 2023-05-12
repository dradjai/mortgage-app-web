import { Link } from "react-router-dom"
import { Container, Navbar, Nav} from "react-bootstrap"
import "./navbar.css";


export default function NavMenu() {

  return(
    <Navbar className="nav-bar bg-secondary">
      <Container className="nav-container">
      <Nav>
      <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/brokers">Brokers</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/requests">Requests</Nav.Link>
        </Nav.Item>

        </Nav>

      </Container>

    </Navbar>
  )
}