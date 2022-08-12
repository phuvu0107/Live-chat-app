import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 
            'Project-ID': 'e71efaf6-c2ac-4744-bcc5-1cc40f0dd41a',
            'User-Name': userName,
            'User-Secret': password
        }

        await axios.get('https://api.chatengine.io/chats', { headers: authObject })
        .then(() => {
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();
        })
        .catch(() => {
            setError('Username or Password you just entered does not match our record! Please try again!');
        })

    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>ChikChak</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type='text'
                        id='userName'
                        value={userName}
                        placeholder='Enter your username ...'
                        required
                        onChange={(e) => setUsername(e.target.value)} />
                    <input
                        className='input'
                        type='password'
                        id='password'
                        value={password}
                        placeholder='Enter your password ...'
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    <div align='center'>
                        <button className='button'>
                            <span>Let's chat</span>
                        </button>
                    </div>
                    
                </form>
            </div>
            <h2 className='error'>{error}</h2>
        </div>
        
    )
}

export default LoginForm;