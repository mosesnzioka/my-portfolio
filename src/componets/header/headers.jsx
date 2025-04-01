import "./header.css";
function Headers() {
  return (
    <header className="header-links">
      <div>
        <h2>Moses Portfolio</h2>
      </div>
      <nav aria-label="Main Navigation">
        <ul className="headers">
          <li className="navigation-link">
            <a href="#">Home</a>
          </li>
          <li className="navigation-link">
            <a href="#">About Me</a>
          </li>
          <li className="navigation-link">
            <a href="#">Contact Me</a>
          </li>
          <li className="navigation-link">
            <a href="#">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
