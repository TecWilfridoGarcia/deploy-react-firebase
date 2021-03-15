import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';
import app from '../fb/firebase';
import firebase from "firebase/app";
import "firebase/auth";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import "./styles.css"
import google from './assets/google.jpg'

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error)
        }
    }, [history])

    const handleSignUp = useCallback(
        async (event) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope("email");
            provider.addScope("profile");
            provider.addScope("openid");
            event.preventDefault();
            try {
                await app.auth().signInWithPopup(provider);
            }
            catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <form className="form" onSubmit={handleLogin}>
                <TextField label="Correo" name="email" type="email" /><br />
                <TextField name="password" type="password" label="Contraseña" /><br />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
            <div className="container-button-google">
                <button className="button-google" onClick={handleSignUp}>
                    <img src={google} alt="google" />
                Sign In with google</button>
            </div>
            <Typography>
                <Link onClick={() => history.push("/signup")}>

                    Create a new account
                </Link>
            </Typography>
        </div>
    )
}
export default withRouter(Login);