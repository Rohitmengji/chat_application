import React, {useState} from 'react'
import axios from 'axios'
 const LoginForm = () => {
    const [username , setUsername]  = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID' : "576acd99-0863-44b5-986b-f13a9c08fef4", 'User-Name' : username, 'User-Secret': password }
        try {
            // username | password => chatEngine -> give messages
          await axios.get('https://api.chatengine.io/chats', { headers : authObject});
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
          // if that works out -> logged in 
        } catch (error) {
            // error -> try to enter correct username...
            setError('Oops, incorrect Password.')
        }

    }
    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <h4  className="title">Login</h4>
                <form onSubmit={handleSubmit} >
                    <input 
                    autoFocus={true}
                    type="text"
                    autoComplete='true'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    className="input"
                    placeholder='Username'
                    required
                    />
                    <input 
                    className="input"
                    autoComplete='on'
                    type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder='Password'
                    />
                    <div align="center">
                    <button type='submit' className="button">
                        <span>Start Chatting</span>
                    </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm; 