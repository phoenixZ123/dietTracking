import './app.css';
import Dashboard from './features/dashboard/dashboard';
import Login from './features/Login/login';
// import Dashboard from './features/dashboard/dashboard';

import useAuthStore from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const isAuthenticated = true;
  localStorage.clear();
  localStorage.removeItem('theme');
console.log("auth :",isAuthenticated);
  return (
    <>
          {isAuthenticated ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;
