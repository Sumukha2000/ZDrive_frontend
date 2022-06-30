import { React, useState } from 'react';
import './signinpage.css'
import { SignIn } from '../../services/authentication';
import { useDispatch } from 'react-redux';


const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return <div className='signinpage'>
        <form className='signinform'
            onSubmit={event => {
                event.preventDefault();
                SignIn(dispatch, { username, password });
            }}>
            <h4 className='welcometext'>Welcome back</h4>
            <input type="text" placeholder='Username'
                    onChange={event => setUsername(event.target.value)} />
        
        
                <input placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)} />
        
            <button type='submit' className='signinbutton'>Sign In</button>
        </form>
      
    </div>
};

export default SignInPage;