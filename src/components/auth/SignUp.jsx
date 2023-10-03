import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

  export default function SignUp() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) =>{
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
              // create user 
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
        <form onSubmit={signUp}>
          <h1>Crate Your account</h1>
            <input type="email" name="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
  }