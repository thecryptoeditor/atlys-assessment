const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 
                    className="text-2xl text-white mb-4"
                >
                    Create an account to continue
                </h2>

                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-2 mb-4 bg-gray-700 text-white rounded" 
                />
                
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="w-full p-2 mb-4 bg-gray-700 text-white rounded" 
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-2 mb-4 bg-gray-700 text-white rounded" 
                />

                <button 
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Continue
                </button>

                <div className="mt-4 text-gray-400">
                    Already have an account? 
                    <a 
                        href="/login" 
                        className="text-blue-400"
                    >
                        Login
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Signup;
