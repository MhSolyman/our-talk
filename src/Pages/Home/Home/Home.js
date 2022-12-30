import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import swal from 'sweetalert'

const Home = () => {
    const { user } = useContext(AuthContext);

    const [t, setT] = useState([])
    console.log(t)
    useEffect(() => {

        fetch('https://c-orpin.vercel.app/tpost')
            .then((response) => response.json())
            .then((data) => setT(data));
    }, []);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;
        const photoURL = form.image.value;



        const data = {
            text,
            photoURL
        };

        fetch('https://c-orpin.vercel.app/post', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                swal("Good job!", "You clicked the button!", "post success");
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }











    return (
        <div>
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <textarea type="text" name='text' placeholder="Text" className="textarea textarea-primary" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name='image' placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    {
                        user ? <button className="btn btn-primary my-5">Post</button> : <button className="btn btn-primary my-5"><Link to={'/LogIn'}>Post</Link></button>
                    }
                </div>
            </form>



            {
                t.map(post => <div className="card card-side bg-base-100 shadow-xl my-5">
                    <figure><img src={post.photoURL} alt="Movie" /></figure>
                    <div className="card-body">
                        
                        <p>{post?.text}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Like</button>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default Home;