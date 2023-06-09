import { useEffect, useState} from "react";
import BrokerCard from "./BrokerCard";
import { Button, Container, Form, Row, Card } from "react-bootstrap";




export default function BrokerList() {

  const [brokers, setBroker] = useState();
  const [city, setCity] = useState('');
  

  useEffect(() => {
    fetch("https://mortgage-app-dsr.web.app/brokers")
    .then(resp => resp.json())
    .then(setBroker)
    .catch(alert)

  }, [])

  const handleSearchByCity =  async (e) => {
    e.preventDefault();
    const response = await fetch(`https://mortgage-app-dsr.web.app/brokers-city/${city}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    console.log(data);
    setBroker(data);
  }

  const handleSearchAll =  async () => {
    const response = await fetch(`https://mortgage-app-dsr.web.app/brokers`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    console.log(data);
    setBroker(data);
  }





  return (
    <>
  
  <Card className="card-search">
  <h3><strong>Mortgage Brokers</strong></h3>&nbsp;
    <Form onSubmit={handleSearchByCity}>
    <Button variant="primary" onClick={handleSearchAll}>All Brokers</Button>
    <Button variant="primary" type="submit">Search City</Button>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control 
          type="text"
          placeholder="Search City" 
          value={city}
          onChange={ (e) => {setCity(e.target.value)}}/>
      </Form.Group>
      </Form>
    </Card>
      <br/>
      <br/>
      <section>
       
      <Container id="broker-list">
      <Row className="d-flex justify-content-center g-5">
        {(!brokers)
        ? <h2>Loading...</h2>
        : 
          brokers.map(broker => (
          <BrokerCard key={broker.id} broker={broker}/>  
        ))}

    </Row>  
    </Container>

      </section>
      </>
  
  )
}