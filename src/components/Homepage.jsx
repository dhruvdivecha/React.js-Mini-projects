import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to my site</h1>
      <div className="links">
        <Link to="/counter">Go to Counter</Link>
        <Link to="/todo">Go to Todo</Link>
      </div>
    </div>
  );
}

export default Homepage;
