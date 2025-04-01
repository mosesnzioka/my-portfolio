import Title from "../title/title";
import "./education.css";

function Education() {
  return (
    <div className="education-section">
        <Title maintitle={"🎓 Educational Background"} />
      <h2>🎓 Educational Background</h2>
      <p>I hold a degree in <strong>[Your Degree]</strong> from <strong>[Your University]</strong>.</p>
      <a href="/path-to-your-cv.pdf" download className="cv-button">Download My CV</a>
    </div>
  );
}

export default Education;
