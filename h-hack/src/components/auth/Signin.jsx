import React, {useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = (e) => {
        e.preventDefult();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signin}>
            <h1>Log in</h1>
            <input type="text" name="" id="" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">log in</button>
        </form>
    </div>
  )
}

export default Signin

//ur nothing ur nothing u need no one i dont need anyone i dont need anyone i dont need anyone. u r alone