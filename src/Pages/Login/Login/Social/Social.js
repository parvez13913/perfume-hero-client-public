import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import googleLogo from '../../../../images/social/google-logo.png';
import Loading from '../../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

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
    if (user) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 mx-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 my-3'>
                    <img src={googleLogo} alt="Google-logo" />
                    <span>Google Login</span>
                </Button>
            </div>
            {loadingElement}
            {errorElement}
        </div>
    );
};

export default Social;