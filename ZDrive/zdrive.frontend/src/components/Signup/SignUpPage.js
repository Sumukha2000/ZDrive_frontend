import { React, useState } from 'react';
import { SignUp } from '../../services/authentication';
import { useDispatch } from 'react-redux';
import './signuppage.css'

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    return <div className='signup'>
        <form className='signupform'
            onSubmit={event => {
                event.preventDefault();
                if (password === confirmPassword) {
                    SignUp(dispatch, { username, email, password });
                }
            }}>
            <h4 className='createtext'>Create an account</h4>
       
                <input placeholder='Username'
                    onChange={event => setUsername(event.target.value)} />
           
         
                <input placeholder='Email'
                    onChange={event => setEmail(event.target.value)} />
       
        
                <input placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)} />
   
                <input placeholder='Confirm Password' type='password'
                    onChange={event => setConfirmPassword(event.target.value)} />
   
            <button type='submit' className='signupbutton'
                disabled={password !== confirmPassword || password.length <= 0}>Sign Up</button>
        </form>
    
    </div>
};

export default SignUpPage;