import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passRef = useRef("");
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //Reset password hooks
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    // show error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    // else {
    //     alert("Please correct informetion")
    // }
    const navigateRegister = event => {
        navigate("/register")
    }

    //reset password onclick
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast("please enter your email")
        }
    }
    return (
        <div>
            <h2 className='text-center mt-3 text-info'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <p>New to Genius car? <Link to="/register" className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

                <p>Forgate PassWord? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className='w-50 d-block mx-auto rounded-pill' variant="info" type="submit">
                    Login
                </Button>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;