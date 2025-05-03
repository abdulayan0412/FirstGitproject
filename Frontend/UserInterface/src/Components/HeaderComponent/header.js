import { Link } from "react-router-dom";
import "./header.css";

const header = () => {
  return (
    <nav>
      <div className="first">
        <h2>Dashboard</h2>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default header;
