import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

  export default function SignIn() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) =>{
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            }
          )
    }


return(
    <div>
        <form onSubmit={signIn}>
          <h1>Sign into your account</h1>
            <input type="email" name="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign In</button>
        </form>
    </div>
    );
  }