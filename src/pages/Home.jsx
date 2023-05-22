
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { UserStatus } from "../App";
import Dashboard from "../components/Dashboard/Dashboard";

import '../styles/App.scss';



export default function Home() {

  const {user} = useContext(UserStatus);

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return(
    <>
      {user
        ?<Dashboard/>
       
      
        
        : <Container id="home">
           <Row>
            <Col md={4}>Requests
            <div className="profile">
              <img src={imgRoot + "HomeRequests.webp"} alt="profile"/>
              </div>
            </Col>
            
            <Col md={4}>Brokers
            <div className="profile">
              <img src={imgRoot + "HomeBroker.webp"} alt="profile"/>
              </div>
            </Col>
            
            <Col md={4}>Calculator
            <div className="profile">
              <img src={imgRoot + "HomeCalculatorNew.jpeg"} alt="profile"/>
              </div>
            </Col>

           </Row>
          </Container>}
        
    </>
  )
}