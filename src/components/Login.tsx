import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl text-white mb-4">Log into your account</h2>
                <input type="text" placeholder="Email or Username" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
                <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
                <button className="w-full p-2 bg-blue-500 text-white rounded">Login now</button>
                <div className="mt-4 text-gray-400">
                    Not registered yet? <a href="/signup" className="text-blue-400">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
