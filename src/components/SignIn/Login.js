import React from 'react';
import './form2.css';

const Login = (props) => {
    const{ email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
      <section className="login">
          <div className="loginContainer">
            <label>Username</label>
            <input
            type="text"
            autoFocusrequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}> Sign in </button>
                    <p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign Up </span></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}> Sign Up </button>
                    <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign In </span></p>
                    </>  
                )} 
            </div>
          </div>
      </section>
    );
};


export default Login;