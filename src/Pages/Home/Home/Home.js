import React from 'react';

const Home = () => {
    return (
        <div>
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              


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

            </form>


        </div>
    );
};

export default Home;