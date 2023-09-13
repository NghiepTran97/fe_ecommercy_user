import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Header_login from "../common/Header_login/Header_login";
import { Link, useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        navigate('/register')
    }

    return (
        <>
            <Header_login/>
            <div className="login-contanier">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block text-center">
                        <FaShoppingBag className="brand-icon"/>
                        <div className='brand'>
                            Shopping
                        </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className='brand'>
                            Login
                        </div>
                        <input type='text' className='form-control' placeholder='Email address or phone number'/>
                        <input type='password' className='form-control' placeholder='Password'/>
                        <button className='btn btn-login'>Login</button>
                        <span className='text-center'>
                            <Link className='forgot-password'>Forgot your password?</Link>
                        </span>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateAccount()}>
                                Create new account
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Login;