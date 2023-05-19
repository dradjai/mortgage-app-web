import { useEffect, useState} from "react";
import BrokerCard from "./BrokerCard";
import { Col, Container, Row } from "react-bootstrap";


export default function BrokerList() {

  const [brokers, setBroker] = useState();

  

  useEffect(() => {
    fetch("https://mortgage-app-dsr.web.app/brokers")
    .then(resp => resp.json())
    .then(setBroker)
    .catch(alert)

  }, [])


  return (
    
      <section>
        

        {(!brokers)
        ? <h2>Loading...</h2>
        : brokers.map(broker => (
          <BrokerCard key={broker.id} broker={broker}/>  
        ))}

      </section>
  
  )
}