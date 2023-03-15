import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleClickLogout = () => {
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button type="button" onClick={handleClickLogout}>logout</button>
            {/* <Link to="/logout">Logout</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
