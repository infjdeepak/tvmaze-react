import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Tv Maze</Link>
      </div>
    </nav>
  );
};

export default Nav;
