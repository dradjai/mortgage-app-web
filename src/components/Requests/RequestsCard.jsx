import { Button, Table } from "react-bootstrap";





export default function RequestCard({ req, setIsUpdate, setFormValues, handleShow, handleDelete}) {

  


  const handleOpen = () => {
    handleShow()
    setFormValues(req);
    setIsUpdate(true)

  }

  return (
    <>

      <Table striped bordered hover>
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

    </>
  )
}