import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [sendEmailVerification] = useSendEmailVerification(auth);

    const handleEmailField = event => {
        setEmail(event.target.value);
    }

    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordField = event => {
        setConfirmPassword(event.target.value);
    }

    const handelRegister = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast('Password Did Not Match');
            return
        }
        else {
            createUserWithEmailAndPassword(email, password);
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
        <div className='container-lg container-sm register w-50 border border-light my-5 p-3 rounded bg-light.bg-gradient shadow-lg'>
            <h1 className='mx-auto mt-5'>Please Register</h1>
            <form onSubmit={handelRegister}>
                <div className="my-3">
                    <input type="text" className="form-control" id="name" placeholder='Enter Your Name' required />
                </div>
                <div className="my-3">
                    <input onBlur={handleEmailField} type="email" className="form-control" id="email" placeholder='Enter Your Email' required />
                </div>
                <div className="my-3">
                    <input onBlur={handlePasswordField} type="password" className="form-control" id="password" placeholder='Enter Your Password' required />
                </div>
                <div className="my-3">
                    <input onBlur={handleConfirmPasswordField} type="password" className="form-control" id="confirmPassword" placeholder='Confirm Your Password' required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                {loadingElement}
            </form>
            {errorElement}
            <p className='my-3 text-center'> Already Have an Account?? <Link to='/login' className='text-danger text-decoration-none h6'>Please Login</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Register;