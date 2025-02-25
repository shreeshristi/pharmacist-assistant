import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Pharmacy Management System</h1>
      <nav>
        <Link to="/login">
          <button>Pharmacist Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;