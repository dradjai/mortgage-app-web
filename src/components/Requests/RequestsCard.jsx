import { Button } from "react-bootstrap";



export default function RequestCard({ req, setFormValues, setShow, setUpdate}) {

  const handleDelete = async () => {
    const response = await fetch(`https://mortgage-app-dsr.web.app/requests/${req._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })

  }

  const handleOpen = () => {
    setShow(true);
    setFormValues(req);
    setUpdate("update")
    
    
  }

  const handleUpdate = async () => {
    const response = await fetch(`https://mortgage-app-dsr.web.app/requests/${req._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req)
    })
    const data = await response.json()

  }

  

  return (
    <>
      <p>{req.firstName}</p>
      <p>{req.lastName}</p>
      <p>{req.email}</p>
      <p>{req.phone}</p>
      <p>{req.location}</p>
      <p>{req.createdAt}</p>
      <Button onClick={ () => handleDelete()}>Delete</Button>
      <Button onClick={ () => handleOpen()}>Edit</Button>

    </>
  )
}