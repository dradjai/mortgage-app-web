import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';



export default function ModalComponent({ formValues, setFormValues, handleClose, show, isUpdate, handleUpdate, handleAdd}) {



  

  return(
    <>
   
    
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      
          <Modal.Title>{isUpdate ? "Edit Request" : "Add Request"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
        <Form onSubmit={isUpdate ? (e) => handleUpdate(e, formValues) : handleAdd}>
      <Row className="mb-3" >
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="First Name" 
          value={formValues.firstName}
          onChange={(e) => {setFormValues({...formValues, firstName: e.target.value})}}/>
      </Form.Group>
      
      <Form.Group as={Col} className="mb-3" controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Last Name" 
          value={formValues.lastName}
          onChange={ (e) => {setFormValues({...formValues, lastName: e.target.value})}}/>
        </Form.Group>
    
      <Form.Group as={Col} className="mb-3" controlId="formGridLastPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Phone" 
          value={formValues.phone}
          onChange={ (e) => {setFormValues({...formValues, phone: e.target.value})}}
          />
      </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter email" 
          value={formValues.email}
          onChange={ (e) => {setFormValues({...formValues, email: e.target.value})}}/>
      </Form.Group>
     
      <Form.Group as={Col} className="mb-3" controlId="formGridLocation">
        <Form.Label>City Location</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter location" 
          value={formValues.location}
          onChange={ (e) => {setFormValues({...formValues, location: e.target.value})}}
          />
      </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} className="mb-3" controlId="formGridPropType">
        <Form.Label>PropertyType</Form.Label>
        <Form.Select onChange={ (e) => {setFormValues({...formValues, propType: e.target.value})}} >
          <option>Select Property Type</option>
          <option value="Single-Family">Single-Family</option>
          <option value="TownHome">Townhome</option>
          <option value="Condo">Condo</option>
           </Form.Select>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridPropValue">
        <Form.Label>Value</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Value" 
          value={formValues.propValue}
          onChange={ (e) => {setFormValues({...formValues, propValue: e.target.value})}}
          />
      </Form.Group>      

      </Row>
      
      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridDownPayment">
          <Form.Label>Down Payment</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Down Payment" 
            value={formValues.downPayment}
            onChange={ (e) => {setFormValues({...formValues, downPayment: e.target.value})}}
            />
        </Form.Group>  

        <Form.Group as={Col} className="mb-3" controlId="formGridCredit">
        <Form.Label>Credit</Form.Label>
        <Form.Select onChange={ (e) => {setFormValues({...formValues, credit: e.target.value})}}>
          <option>Select Credit</option>
          <option value="> 740">&gt; 740</option>
          <option value="700-739">700 - 739</option>
          <option value="660-699">660 - 699</option>
          <option value="640-659">640 - 659</option>
          <option value="620-639">620 - 639</option>
          <option value="< 620">&lt; 620</option>
           </Form.Select>
      </Form.Group>  

      <Form.Group as={Col} className="mb-3" controlId="formGridIncome">
          <Form.Label>Monthly Income</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Income" 
            value={formValues.employment}
            onChange={ (e) => {setFormValues({...formValues, employment: e.target.value})}}
            />
      </Form.Group>  

      </Row>

      <Form.Group as={Col} className="mb-3" controlId="formScenario">
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control 
            as="textarea" rows={3}
            placeholder="Additional Comments" 
            value={formValues.scenario}
            onChange={ (e) => {setFormValues({...formValues, scenario: e.target.value})}}
            />
      </Form.Group>  

      <Button variant="primary" type="submit">
        {isUpdate ? "Save" : "Submit"}
      </Button>
    </Form>
    

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    
    </>
  )
}