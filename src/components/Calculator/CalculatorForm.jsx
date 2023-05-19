import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "./Calculator.css"


export default function CalculatorForm() {

  const [price, setPrice] = useState('');
  const [payment, setPayment] = useState('');
  const [loan, setLoan] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");


  const calculate = (e) => {
    e.preventDefault();
    const intPrice = Number(price);
    const intPayment = Number(payment);
    const intRate = Number(rate);
    const intTerm = Number(term);
    console.log({ intPrice, intPayment, intRate, intTerm });
    const _loan = intPrice - intPayment;
    setLoan(_loan);

    // Mortgage Calc Formula
    const calcPart1 = ((intRate/100)/12) * _loan;
    const calcPart2 = (1 - Math.pow((1 + (intRate/100)/12), -intTerm))
    setMonthlyPayment((calcPart1/calcPart2).toFixed(2));
    
  }

  const reset = () => {
    setPrice('');
    setPayment('');
    setLoan('');
    setRate('');
    setTerm('');
    setMonthlyPayment("0.00");
  }



  return (
    <>
    <Card className="card">
      <h2>Mortgage Calculator</h2>
    <Form onSubmit={calculate}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sales Price</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Sales Price" 
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Down Payment</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Down payment" 
        value={payment}
        onChange={(e) => {setPayment(e.target.value)}}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Rate" 
        value={rate}
        onChange={(e) => {setRate(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Term in Months</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Term in Months" 
        value={term}
        onChange={(e) => {setTerm(e.target.value)}}/>
      </Form.Group>

     
      <Button variant="primary" type="submit">Calculate </Button>&nbsp;
      <Button onClick={reset}>Reset</Button>
      </Form>
      </Card>

  <Container className="res-container">
    <h2>Monthly Payment Principal and Interest</h2>&nbsp;
    <h2>${monthlyPayment}</h2>
  </Container>
    </>
  )
}