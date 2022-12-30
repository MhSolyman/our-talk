import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

const {user, signIn ,signInWithGoogle}= useContext(AuthContext);

const handleGoogleSignIn = () => {
    signInWithGoogle(user)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(err => console.log(err))

}


const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)



    signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            
           
        })
        .catch(err => console.log(err))

}




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={''} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>


                        </form>
                        <button onClick={handleGoogleSignIn} className=" btn btn-outline btn-primary my-6" >Login With Google</button>
                    </div>
                   
                </div>

            </div>

            
            
        </div>
    );
};

export default Login;