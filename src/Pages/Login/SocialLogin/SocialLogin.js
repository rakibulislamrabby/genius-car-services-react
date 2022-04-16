import React from 'react';
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (loading || loading1) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info rounded-pill w-50 d-block mx-auto'>
                    <img className='me-4' style={{ width: "30px" }} src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-info rounded-pill w-50 d-block mx-auto my-4'>
                    <img className='me-4' style={{ width: "25px" }} src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info rounded-pill w-50 d-block mx-auto'>
                    <img className='me-4' style={{ width: "25px" }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;