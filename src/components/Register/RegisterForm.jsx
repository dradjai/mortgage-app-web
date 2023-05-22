import { useState } from "react";
import { Button, Card, Form, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




export default function RegisterForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [msgResult, setMsgResult] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const resp = await fetch('https://mortgage-app-dsr.web.app/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password, fullName})
    });
    const _user = await resp.json();
    setToastMessage(_user.message);
    
    if(_user.message === 'Registered'){
      setShowToast(true);
      setMsgResult('Success');
      setTimeout( () => {
        navigate("/login")
      }, 3000);
      
    }
    else {
      setShowToast(true);
      setMsgResult('warning');
    }
  
    }
  

  return(
    <>


    <Toast className="d-inLine-block m-1" bg={msgResult}
      onClose={ () => setShowToast(false)}
      autohide
      show={showToast}
      delay={2000}>

      <Toast.Header>
        <strong className="me-auto">{msgResult}</strong>
      </Toast.Header>
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>

    <Card className="register-card">
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name" 
          value={fullName}
          onChange={ (e) => {setFullName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter email" 
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={ (e) => {setPassword(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </>
  )
}
