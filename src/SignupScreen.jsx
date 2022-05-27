import React, { useRef } from 'react'
import { auth } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './SignupScreen.css'

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        //Old version
        //    auth.createUserWithEmailAndPassword(
        //             emailRef.current.value,
        //             passwordRef.current.value
        //         )

        //new version
        const auth = getAuth();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message);
            });

    };


    const signIn = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message);
            });

    }

    return (
        <div className='signupScreen'>

            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type="email" />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button onClick={signIn} type='submit'>Sign In</button>

                <h4>
                    <span className='signupScreen_gray'>New to Netflix?</span>
                    <span className='signScreen_link' onClick={register}>  Sign Up Now.</span></h4>
            </form>
        </div>
    )
}

export default SignupScreen