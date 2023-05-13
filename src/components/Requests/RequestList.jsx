import { useEffect, useState } from "react"
import RequestCard from "./RequestsCard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const reqObj = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: ""
}



export default function RequestList() {
  const [show, setShow] = useState(false);
  const [requests, setRequests] = useState();
  const [formValues, setFormValues] = useState({reqObj});
  const [update, setUpdate] = useState('');

  
  

  const handleClose = () => {
    setShow(false)
    setFormValues(reqObj)
  }
  const handleShow = () => setShow(true);


useEffect( () => {
  fetch("https://mortgage-app-dsr.web.app/requests")
    .then(resp => resp.json())
    .then(setRequests)
    .catch(alert)
}, [requests])




const handleAdd = async (e) => {
 
  e.preventDefault();
  const response = await fetch("https://mortgage-app-dsr.web.app/requests", {
    
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(formValues)
  })
  
  const data = await response.json();
  handleClose(true);
  setFormValues(reqObj);
 
}





  return(
    <>
      
      <div>Add New</div>
      <Button variant="primary" onClick={handleShow}>
        Add New Request
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleAdd}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter First Name" 
          value={formValues.firstName}
          onChange={(e) => {setFormValues({...formValues, firstName: e.target.value})}}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Last Name" 
          value={formValues.lastName}
          onChange={ (e) => {setFormValues({...formValues, lastName: e.target.value})}}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter email" 
          value={formValues.email}
          onChange={ (e) => {setFormValues({...formValues, email: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter phone" 
          value={formValues.phone}
          onChange={ (e) => {setFormValues({...formValues, phone: e.target.value})}}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastPhone">
        <Form.Label>City Location</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter location" 
          value={formValues.location}
          onChange={ (e) => {setFormValues({...formValues, location: e.target.value})}}
          />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
      {!requests
      ? <h2>Loading...</h2>
      : requests.map(request => (
        <RequestCard key={request.id} req={request} setShow={setShow} setFormValues={setFormValues} setUpdate={setUpdate}/>
      ))}
    </>
  )
}