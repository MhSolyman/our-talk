import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Media = () => {
    const { user } = useContext(AuthContext);


    const [posts, setPosts] = useState([])
    console.log(posts)
    useEffect(() => {
        fetch('https://c-orpin.vercel.app/post')
            .then((response) => response.json())
            .then((data) => setPosts(data))

    }, [])

    const handlelike = (id) => {

        fetch(`https://c-orpin.vercel.app/like/?id=${id}&email=${user?.email}`, {
            method: 'POST',

        })
            .then((response) => response.json())
            .then((data) => {

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }











    const handleSubmitPost = (event, id) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        console.log(id)





        const data = {

            comment,
            email: user?.email,
            id: id

        };

        fetch('https://c-orpin.vercel.app/comment', {
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

    }



    return (
        <div>
            {posts.map(post => <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={
                    post?.photoURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>{post?.text}</p>



                    <div className="card-actions justify-end">
                        <p>like:</p>

                        <button className="btn btn-primary" onClick={() => handlelike(post?._id)}><Link >Like</Link></button>

                        <button className="btn btn-primary"><Link to={`/post/${post?._id}`}>Details</Link></button>
                    </div>
                    <div><form onSubmit={handleSubmitPost}><textarea name='comment' className="textarea textarea-primary" placeholder="Bio"></textarea><span>
                        <button className="btn btn-primary mt-0" onClick={() => handleSubmitPost(post?._id)}>comment post</button></span></form>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default Media;