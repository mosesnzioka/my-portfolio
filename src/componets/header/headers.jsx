import "./header.css";
function Headers() {
  return (
    <header className="header-links">
      <div className="portfolio-logo">
        <h2>
          <i class="fa-brands fa-asymmetrik"></i>Moses Portfolio
        </h2>
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
