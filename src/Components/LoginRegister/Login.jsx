// website/src/pages/Login.js (or wherever your Login component is)
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import bgImage from "../../Assets/conifers-1867371_1280.jpg";
import { auth, db } from '../../firebase'; // Adjust path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user.uid, user.email);

      // Check or set user role in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), { role: email.includes('@org.com') ? 'organization' : 'resident' }, { merge: true });
        console.log('User role set in Firestore:', email.includes('@org.com') ? 'organization' : 'resident');
      } else {
        console.log('User role from Firestore:', userDoc.data().role);
      }

      // Redirect to website dashboard or homepage
      navigate("/dashboard");
    } catch (error) {
      console.error('Login failed:', error.code, error.message);
      setError(error.message);
    }
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
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded bg-white/30 backdrop-blur-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded bg-white/30 backdrop-blur-md"
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded flex justify-center"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => window.open('https://food-waste-dashboard.vercel.app/', '_blank')} // Open dashboard in new tab
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Dashboard
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;