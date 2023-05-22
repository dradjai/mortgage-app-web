import { useContext, useState } from "react";
import { Button, Card, Form, Toast } from "react-bootstrap";
import { UserStatus } from "../../App";
import { useNavigate } from "react-router-dom";





export default function LoginForm() {
  
  const navigate = useNavigate();


  const { setUser } = useContext(UserStatus)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')
  const [msgResult, setMsgResult] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch('https://mortgage-app-dsr.web.app/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    });
    const _user = await resp.json();
    console.log(_user);
    console.log(_user._id);
    if(_user._id){
      setUser(_user);
      setShowToast(true);
      setMsgResult('success');
      setToastMessage('Login Success')
      setTimeout( () => {
        navigate("/");
      }, 3000);
    }
    else {
      setShowToast(true);
      setToastMessage(_user.message);
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

    <Card className="login-card">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
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