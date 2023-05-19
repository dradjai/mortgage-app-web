import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { UserStatus } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Login.css";



export default function LoginForm() {
  
  const navigate = useNavigate();


  const { setUser } = useContext(UserStatus)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    }
   navigate("/requests");

  }

  return(
    <>
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