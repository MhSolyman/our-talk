import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';


const About = () => {
    const { user } = useContext(AuthContext)
    const [about, setAbout] = useState({})
    console.log(about)
    useEffect(() => {
        fetch(`https://c-orpin.vercel.app/about/${user?.email}`)
            .then((response) => response.json())
            .then((data) => setAbout(data));
    }, [user?.email])


    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn">edite</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">user name: {about?.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>




            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={about?.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">User name: {about?.name}</h2>
                    <p>User email: {about?.email}</p>
                   
                </div>
            </div>


        </div>
    );
};

export default About;