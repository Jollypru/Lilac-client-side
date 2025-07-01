import React from 'react';

const Register = () => {
    return (
        <div className="hero bg-rose-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'><img src="/src/assets/Mobile login-rafiki (3).png" alt="" /></div>
                <div className="card bg-rose-50 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="px-5 pt-5 text-3xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="name" className="input" placeholder="Name" />
                            <label className="fieldset-label">Photo</label>
                            <input type="file" className="file-input" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;