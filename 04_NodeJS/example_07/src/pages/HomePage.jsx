import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import PostList from '../components/PostList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <div>
          <p>Welcome, guest! Feel free to explore the posts.</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
      <PostList />
    </div>
  );
};

export default HomePage;
