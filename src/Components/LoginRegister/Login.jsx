import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import bgImage from "../../Assets/conifers-1867371_1280.jpg"; // Adjust path as needed

const Login = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate("/dashboard"); // Example: Redirect to dashboard after login
    };

    return (
        <section
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="backdrop-blur-lg bg-white/30 dark:bg-white/10 shadow-lg p-8 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Login
                </h1>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded bg-white/30 backdrop-blur-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded bg-white/30 backdrop-blur-md"
                    />

                    
                    <button 
                        onClick={handleLogin} 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded flex justify-center"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard")} // Navigate without page reload
                        className="w-full bg-green-600 text-white py-2 rounded"
                    >
                        Dashboard
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link to="/Register" className="text-blue-500 hover:underline">
                            Sign up here
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
