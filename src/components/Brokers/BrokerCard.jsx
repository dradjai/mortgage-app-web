import { Container, Row, Col} from "react-bootstrap";

export default function BrokerCard({broker}) {

  return (
    <div>
      <Container>
      <Row>
      <Col>
      <img src={broker.image} alt=""/>
      <h2>{broker.name}</h2>
      <p>{broker.email}</p>
      </Col>
      </Row>
      </Container>


    </div>
  )
}