import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';


export default function ModalComponent({ formValues, setFormValues, handleClose, handleShow, show, isUpdate, handleUpdate, handleAdd}) {



  

  return(
    <>
   
    
       <div>Add New</div>
      <Button variant="primary" onClick={handleShow}>
        Add New Request
      </Button>
    <Pagination>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        {/* <div>
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
       </div> */}
          <Modal.Title>{isUpdate ? "Edit Request" : "Add Request"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* insert handleSubmit */}
        <Form onSubmit={isUpdate ? (e) => handleUpdate(e, formValues) : handleAdd}>
    
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
      </Pagination>
    
    </>
  )
}