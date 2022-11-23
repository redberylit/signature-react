import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle } from '../firebase/firebase';
import {
  Box,
  Button,
  Toast,
  Container,
  Text,
  TextField,
  Heading,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import "bootstrap/dist/css/bootstrap.min.css";

const LoginLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  return (
    <div className="global-container" style={{height:"100%",
    display:" flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",}}>
  <div className="card login-form mt-4 col-5">
  <div className="card-body">
{error !== null && <Toast text={error} />}
    <h3 className="card-title text-center">Log in</h3>
    <div className="card-text">
    <form>

<div className="form-group">
  <label for="exampleInputEmail1">User</label>
  <input type="text" className="form-control form-control-sm" id="exampleInputEmail1"                value={email}             onChange={event => setEmail(event.value)} />
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Password</label>
  <a href="#" style={{float:"right",fontSize:"12px"}}>Forgot password?</a>
  <input type="password" className="form-control form-control-sm" id="exampleInputPassword1"
                  onChange={event => setPassword(event.value)}
              placeholder="Enter your password"
              label="Password"
              value={password}
  />
</div>
<button  className="btn btn-primary btn-block"  onClick={event => {
                signInWithEmailAndPasswordHandler(event, email, password);
                navigate('/blog-overview');
              }} >Sign in</button>


<div className="sign-up">
  Don't have an account? <a href="#">Create One</a>
</div>
</form>
  <button onClick={signInWithGoogle}  className="btn btn-primary btn-block" >
  Sign in with Google </button>
    {/* <Box padding={3}>
        <Container>
          <Box padding={3}>
            {error !== null && <Toast text={error} />}
            <Heading size="md">Sign in</Heading>
          </Box>
          <Box padding={2}>
            <TextField
              id="email"
              onChange={event => setEmail(event.value)}
              placeholder="Enter your email"
              label="Email"
              value={email}
              type="email"
            />
          </Box>
          <Box padding={2}>
            <TextField
              id="password"
              onChange={event => setPassword(event.value)}
              placeholder="Enter your password"
              label="Password"
              value={password}
              type="password"
            />
          </Box>
          <Box padding={2}>
            <Button
              onClick={event => {
                signInWithEmailAndPasswordHandler(event, email, password);
                navigate('/');
              }}
              text="Sign in"
              color="blue"
              inline
            />
          </Box>

          <Box padding={2}>
            <Text>or</Text>
          </Box>
          <Box padding={2}>
            <Button onClick={signInWithGoogle} text="Sign in with Google" color="red" inline />
          </Box>
          <Box padding={2}>
            <Text>Don't have an account?</Text>
          </Box>
          <Box padding={2}>
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </Link>
          </Box>
          <Box padding={2}>
            <Link
              to="passwordReset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </Box>
        </Container>
      </Box> */}
    </div>
    </div>
    </div>
    </div>
  );
}

export default LoginLayout
