import { Image, Col, Card, Container, Row} from "react-bootstrap";

export default function BrokerCard({broker}) {

  return (
    <div>
      
    
      <Container>
        <Row >

        <Col sm={10} md={6} lg={4}>
        <Card className="p-3">
          <figure>
          <Image src={broker.image} fluid/>
          </figure>
        
          <h3>{broker.name}</h3>
          <p>{broker.email}</p>
          <p>{broker.phone}</p>
          <p>{broker.companyName}</p>
          <p>{broker.title}</p>
          <p>broker.license</p>
        
       
          </Card>
        </Col>
        </Row>
    
      </Container>
      
     


    </div>
  )
}