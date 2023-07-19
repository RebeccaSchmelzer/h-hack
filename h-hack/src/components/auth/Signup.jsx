import React, {useState} from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = (e) => {
        e.preventDefult();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signup}>
            <h1>Create Account</h1>
            <input type="text" name="" id="" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Signup
