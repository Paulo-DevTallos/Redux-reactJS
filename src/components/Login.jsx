import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

const Login = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(changeUser(name))
    }

    return (
        <form>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Nome do usuário"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </form>
    );
}
 
export default Login;