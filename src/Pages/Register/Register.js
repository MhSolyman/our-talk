
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {

    const { updateUserProfile, createUser, signInWithGoogle, user } = useContext(AuthContext)








    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;


        const email = form.email.value;
        const password = form.password.value;





        createUser(email, password, user)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photoURL)


                const data = {
                    name,
                    photoURL,
                    email,
                    userId: user?.uid,

                };

                fetch('https://c-orpin.vercel.app/users', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((data) => {

                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });







            })
            .catch(err => console.log(err))
    }






    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)

    }



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                const data = {
                    name: user?.displayName,
                    photoURL: user.photoURL,
                    email: user?.email,
                    userId: user?.uid

                };

                fetch('https://c-orpin.vercel.app/users', {
                    method: 'POST', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);


                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });




            })
            .catch(err => console.log(err))
    }

















    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>
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


                        </div>
                    </form>

                </div>

            </div>


            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Register With Google</button>


        </div>

    );
};

export default Register;