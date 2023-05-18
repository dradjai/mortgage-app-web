import { UserStatus } from "../../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Container, Navbar, Nav} from "react-bootstrap"
import "./navbar.css";

export default function NavMenu() {
  
  const navigate = useNavigate()

  const { user, setUser} = useContext(UserStatus);

  const logout = () => {
    setUser();
    navigate("/")
  }

  return(
    
    <Navbar className="nav-bar bg-secondary">
      <Container className="nav-container">
      
      <Nav>
      {!user 

       ? <> <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        </Nav.Item> 
        </>
        : <>
        
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/brokers">Brokers</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/requests">Requests</Nav.Link>
        </Nav.Item>
      
        <Nav.Item>
          <Nav.Link as={Link} to="/calculator">Calculator</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav.Item> 
        </>}
        </Nav>

      </Container>

    </Navbar>
  )
}