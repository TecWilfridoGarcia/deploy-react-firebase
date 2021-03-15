import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import app from '../../fb/firebase';
import './styles.css';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error)
    }
  }, [history]);
  
  return (
    <div>
      <h2>SignUp</h2>
      <form className="form" onSubmit={handleSignUp}>
        <TextField label="Correo" name="email" type="email" /><br />
        <TextField name="password" type="password" label="Contraseña" /><br />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
                </Button>
      </form>
    </div>

  )
}

export default withRouter(SignUp);