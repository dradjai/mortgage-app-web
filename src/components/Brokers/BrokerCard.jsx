import { Image, Col } from "react-bootstrap";

export default function BrokerCard({broker}) {

  const url = "https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch"

  return (
    <>
        <Col sm={10} md={6} lg={4}>
         
         <div className="panel">
            <figure>
              <Image src={broker.image} fluid/>
            </figure>

            <div className="content">
              
              <h3>{broker.name}</h3>
              <p>{broker.email}</p>
              <p>{broker.phone}</p>
              <p>{broker.companyName}</p>
              <p>{broker.city}</p>
              <p>{broker.title}</p>
              <p>NMLS <a href={url} 
                 target="_blank"
                 rel="noreferrer">{broker.license}</a></p>
            </div>
          </div>
        </Col>       
    </>
  )
}