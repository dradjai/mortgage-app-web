import { useEffect, useState, useContext } from "react";
import { UserStatus } from "../../App";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const url = "https://www.consumerfinance.gov/owning-a-home/";

export default function Dashboard() {

const { user } = useContext(UserStatus);
const [reqCount, setReqCount] = useState(0);

useEffect( () => {
  fetch(`https://mortgage-app-dsr.web.app/request-count/${user._id}`)
  .then(resp => resp.json())
  .then(setReqCount)
  .catch(alert)
}, [user])

const name = user.fullName;
const nameArr = name.split(' ');
const fname = nameArr[0];

const imgRoot = process.env.PUBLIC_URL + "/images/";

const navigate = useNavigate()

  return(
    <>

      <Card className="dashboard-container">
        <h2><strong>Hello {fname} </strong></h2>
        <p>You have {reqCount.reqLength} requests submitted</p>
      </Card>

      <Container id="dashboard">
           <Row>
            <Col onClick={() => navigate('/requests')} md={4}>Requests
            <div className="profile">
              <img src={imgRoot + "HomeRequests.webp"} alt="profile"/>
              </div>
            </Col>
            
            <Col onClick={() => navigate('/brokers')} md={4}>Brokers
            <div className="profile">
              <img src={imgRoot + "HomeBroker.webp"} alt="profile"/>
              </div>
            </Col>
            
            <Col onClick={() => navigate('/calculator')} md={4}>Calculator
            <div className="profile">
              <img src={imgRoot + "HomeCalculatorNew.jpeg"} alt="profile"/>
              </div>
            </Col>

           </Row>
          </Container>

        <Card className="resource-card">
          <h3>Educational Resources</h3>
          <a href={url}
            target="_blank"
            rel="noreferrer">Consumer Financial Protection Bureau</a>
        </Card>
      
    </>
  )
}