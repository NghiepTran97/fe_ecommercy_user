import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Header_login from "../common/Header_login/Header_login";
import { Link, useNavigate } from "react-router-dom";

function Register () {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        let userData = {username, phone, password};
        console.log(userData);
    }

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
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
                            Signup
                        </div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type='text' className='form-control' placeholder='Username'
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number</label>
                            <input type='text' className='form-control' placeholder='Phone number'
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Comfirm password</label>
                            <input type='password' className='form-control' placeholder='Comfirm password'
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>
                                Already've an account. Login
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Register;