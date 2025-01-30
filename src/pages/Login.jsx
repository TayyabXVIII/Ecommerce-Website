import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const hardcodedEmail = 'user@example.com';
        const hardcodedPassword = 'example123';

        if (email === hardcodedEmail && password ===hardcodedPassword){
            navigate('/home');
        }else{
            <label>Invalid Email or Password!</label>
        }
    }

    return(
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;