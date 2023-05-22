import { Image, Col, Card, Row } from "react-bootstrap";

export default function BrokerCard({broker}) {

  return (
    <>
   
    
    
        <Col sm={10} md={6} lg={4}>
         
          <figure>
          <Image src={broker.image} fluid/>
          </figure>
          <div>
            <h3>{broker.name}</h3>
            <p>{broker.email}</p>
            <p>{broker.phone}</p>
            <p>{broker.companyName}</p>
            <p>{broker.city}</p>
            <p>{broker.title}</p>
            <p>{broker.license}</p>
          </div>
           
        </Col>
       
    </>
  )
}