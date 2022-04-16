import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const Register = () => {
    const [agree, setAgree] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleEmail = (event) => {
    //     const email = event.target.value;
    //     setEmail(email)
    //     console.log(email);
    // }
    // const handlePassword = (event) => {
    //     const password = event.target.value;
    //     setPassword(password);
    //     console.log(password);
    // }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login")
    }

    const handleRegister = async (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Terms and conditioning
        // const agree = event.target.terms.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/home")
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center mt-3 text-info'>Please Register</h2>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='text' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                {/* terms condition color change step-1 */}
                {/* <label className={agree ? "text-primary ps-2" : "text-danger ps-1"} htmlFor='terms'>Accept Terms and Condition</label> */}

                {/* step-2 */}
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor='terms'>Accept Terms and Condition</label>

                <p className='mt-2'>Already have Account? <Link to="/login" className='text-primary text-decoration-none ' >Please Login</Link></p>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button disabled={!agree} className='w-50 d-block mx-auto rounded-pill bg-info' variant="primary" type="submit">
                    Register
                </Button>
                <SocialLogin></SocialLogin>

            </Form>

        </div>
    );
};

export default Register;