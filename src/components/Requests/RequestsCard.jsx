import { useState } from "react";
import { Button, Card, Table, Col, Modal } from "react-bootstrap";







export default function RequestCard({ req, setIsUpdate, setFormValues, handleShow, handleDelete}) {

  const [showReq, setShowReq] = useState(false);


  const handleRequestClose = () => setShowReq(false);
  const handleRequestShow = () => setShowReq(true);

  const handleOpen = () => {
    handleShow()
    setFormValues(req);
    setIsUpdate(true)

  }

  const openReq = () => {
    handleRequestShow()
  }


  

  return (
    <>

    <Modal show={showReq} onHide={handleRequestClose}>
      <Modal.Header closeButton>
         <Modal.Title>Request Details</Modal.Title>
        </Modal.Header>
      <Modal.Body className="modal-body">
        <h4>{req.firstName} {req.lastName}</h4>
        <p>EMAIL: {req.email}</p>
        <p>PHONE: {req.phone}</p>
        <p>LOCATION: {req.location}</p>
        <p>PROPERTY TYPE: {req.propType}</p>
        <p>PROPERTY VALUE: ${req.propValue}</p>
        <p>DOWN PAYMENT: ${req.downPayment}</p>
        <p>CREDIT: {req.credit}</p>
        <p>MONTHLY INCOME: ${req.employment}</p>
        <p>SCENARIO: {req.scenario}</p>

      
      </Modal.Body>
    </Modal>
  



  <Col onClick={ () => openReq()}>
    <Card className="table-list">
    {/* <Button size="sm" onClick={() => openReq()}>Details</Button> */}
      <Table className="table" size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{req.firstName}</td>
              <td>{req.lastName}</td>
              <td>{req.email}</td>
              <td>{req.phone}</td>
              <td>{req.location}</td>
              <td>{req.createdAt}</td>
              <td><Button size="md" onClick={ () => handleDelete(req)}>Delete</Button></td>
              <td><Button size="md" onClick={ () => handleOpen()}>Edit</Button></td>

            </tr>
          
          </tbody>
        </Table>
        </Card>
      </Col>
    </>
  )
}