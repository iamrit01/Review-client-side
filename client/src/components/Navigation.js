import { BrowserRouter as Router, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <ul>
         
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
