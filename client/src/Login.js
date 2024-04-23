import React, {useState, useEffect} from 'react'



const Login = () => {

    const [action,setAction] = useState("Sign Up");

    return (
        <div className='login-container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Sign Up' &&
                    <div className='input'>
                        <img src='static/person-icon.png' alt='' />
                        <input type='text' placeholder='Name' />
                    </div>
                }

                {action === 'Forgot Password' ? 
                    <>
                        <div className='input'>
                            <img src='static/password-icon.png' alt='' />
                            <input type='password' placeholder='New Password' />
                        </div>
                        <div className='input'>
                            <img src='static/password-icon.png' alt='' />
                            <input type='password' placeholder='Repeat Password' />
                        </div>
                    </>
                    :
                    <>
                        <div className='input'>
                            <img src='static/email-icon.png' alt='' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className='input'>
                            <img src='static/password-icon.png' alt='' />
                            <input type='password' placeholder='Password' />
                        </div>
                    </>
                }
            </div>
            {action === "Sign Up" || action === "Forgot Password" ? <div></div> :
                <div className='forgot-password' onClick={() => setAction("Forgot Password")}>
                    <span>Forgot Password?</span>
                </div>
            }


            <div className='submit-container'>
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )


}

export default Login;