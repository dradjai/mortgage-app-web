import { useEffect, useState, useContext } from "react"
import RequestCard from "./RequestsCard";
import ModalComponent from "../Modal/ModalComponent";
import { UserStatus } from "../../App";
import { Button, Card } from "react-bootstrap";



const reqObj = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  propType: "",
  propValue: "",
  downPayment: "",
  credit: "",
  employment: "",
  scenario: ""

}


export default function RequestList() {

  const { user } = useContext(UserStatus);
  const [requests, setRequests] = useState();
  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [formValues, setFormValues] = useState({reqObj});
  



  const handleClose = () => {
    setShow(false)
    setFormValues(reqObj)
  }
  const handleShow = () => {
    setShow(true);
    setIsUpdate(false);

  }

// Listening changes to requests to render
useEffect( () => {
  fetch(`https://mortgage-app-dsr.web.app/requests/${user._id}`)
    .then(resp => resp.json())
    .then(setRequests)
    .catch(alert)
}, [user])


  // const { reqLength } = requests
  // setRequestCount(reqLength);


// ADD Request
const handleAdd = async (e) => {

  formValues.userId = user._id;
 
  e.preventDefault();
  setIsUpdate(false);
  const response = await fetch(`https://mortgage-app-dsr.web.app/requests/${user._id}`, {
    
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(formValues)
  })
  
  const data = await response.json();
  setRequests(data);
  setFormValues(reqObj);
  handleClose(true);
 
}

// Edit a request - Not functioning
const handleUpdate = async (e, item) => {
  e.preventDefault();
  
  const newReq = {
  
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    phone: item.phone,
    location: item.location,
    propType: item.propType,
    propValue: item.propValue,
    downPayment: item.propValue,
    credit: item.credit,
    employment: item.employment,
    scenario: item.scenario
    
  }
  const response = await fetch(`https://mortgage-app-dsr.web.app/requests/${user._id}/${item._id}`, {

    method: "PATCH",
    headers: { 
     "Content-Type": "application/json"
    },
    body: JSON.stringify(newReq)
  })
  const data = await response.json();
  setRequests(data);
  setFormValues(reqObj);
  setIsUpdate(false);
  handleClose(true);
  
 
}

const handleDelete = async (item) => {
  const response = await fetch(`https://mortgage-app-dsr.web.app/requests/${user._id}/${item._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  const data = await response.json()
  setRequests(data);

}


  return(
    <>
      <Card className="add-request"> 
      <h3><strong>Requests</strong></h3>&nbsp;
      <Button onClick={handleShow}>
        Add New Request
      </Button>
      </Card>
      {!requests
      ? <h2>Loading...</h2>
      : requests.map(request => (
        <RequestCard key={request.id} req={request} 
          setIsUpdate={setIsUpdate} 
          setFormValues={setFormValues} 
          handleShow={handleShow} 
          handleDelete={handleDelete}/>
        
      ))}
      
      <ModalComponent 
        formValues={formValues} 
        setFormValues={setFormValues} 
        handleClose={handleClose} 
        handleShow={handleShow}
        show={show} 
        isUpdate={isUpdate} 
        handleUpdate={handleUpdate}
        handleAdd={handleAdd}/>
    </>
  )
}