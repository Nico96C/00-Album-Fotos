import "./header.css";

const HeaderNav = () => {
  return (
    <nav className="navbar">
      <p className="navbar-title">Header</p>
      <div className="navbar-links">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <a className="navbar-brand" href="#">
          More
        </a>
        <a className="navbar-brand" href="#">
          Section
        </a>
        <a className="navbar-brand" href="#">
          End
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;
