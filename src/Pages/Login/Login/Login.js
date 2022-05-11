import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../../firebase.init';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';
import Social from './Social/Social';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    const handelEmailField = event => {
        setEmail(event.target.value);
    }

    const handelPasswordField = event => {
        setPassword(event.target.value);
    }

    const handelSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handelResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Email");
        }
        else {
            toast("Please Enter Your Email");
        }
    }
    if (user) {
        navigate('/');
    }

    let loadingElement;

    if (loading) {
        loadingElement = <p className='text-center my-2'>
            <Loading></Loading>
        </p>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center my-2'>
            {error.message}
        </p>
    }
    return (
        <div>
            <div className='container w-50 border border-light my-5 p-3 rounded bg-light.bg-gradient shadow-lg'>
                <h1 className='mx-auto mt-5'>Please Login</h1>
                <form onSubmit={handelSubmit}>
                    <div className="my-3">
                        <input onBlur={handelEmailField} type="email" className="form-control" id="Email1" placeholder='Enter Your Email' required />
                    </div>
                    <div className="my-3">
                        <input onBlur={handelPasswordField} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required />
                    </div>
                    <Button type="submit" className="btn btn-primary w-100">Login</Button>
                    <Social></Social>
                    <p className='my-3'>New to Basic Photography?? <Link to='/register' className='text-danger text-decoration-none h6'>Please Register</Link></p>
                    <p className='my-3'>Forget Password?? <span onClick={handelResetPassword} className='text-primary text-decoration-none h6 pointer'> Reset Password</span></p>
                    {errorElement}
                </form>
                {loadingElement}
            </div>
            <div className='text-center'>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;