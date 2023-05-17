import { Button } from "react-bootstrap";





export default function RequestCard({ req, setIsUpdate, setFormValues, handleShow, handleDelete}) {

  


  const handleOpen = () => {
    handleShow()
    setFormValues(req);
    setIsUpdate(true)

  }

  return (
    <>
    
      <p>{req.firstName}</p>
      <p>{req.lastName}</p>
      <p>{req.email}</p>
      <p>{req.phone}</p>
      <p>{req.location}</p>
      <p>{req.createdAt}</p>
      <Button onClick={ () => handleDelete(req)}>Delete</Button>
      <Button onClick={ () => handleOpen()}>Edit</Button>
      

    </>
  )
}