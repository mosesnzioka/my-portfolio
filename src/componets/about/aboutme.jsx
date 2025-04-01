import grad3 from "../../assets/grad3.jpg";
import Title from "../title/title";
import "./aboutme.css";
function AboutMe() {
  return (
    <div className="aboutme-description">
      <div>
        <Title maintitle="About Me" />
        <p>
          I am a passionate and results-driven full-stack web developer with
          expertise in HTML, CSS, JavaScript, React, Node.js, Express.js,
          PostgreSQL, and MySQL. With a strong foundation in both front-end and
          back-end development, I specialize in building scalable,
          user-friendly, and efficient web applications. I thrive in
          problem-solving environments, where I can apply my technical skills to
          create impactful solutions. My ability to quickly adapt to new
          technologies and frameworks enables me to stay ahead in the
          fast-evolving tech industry. I have hands-on experience working on
          real-world projects, including a blog platform for Teach2Give, where I
          collaborated with teams and improved my code optimization and database
          management skills. Whether working independently or as part of a team,
          I am committed to delivering high-quality, maintainable, and
          innovative software solutions. Currently, I am part of the PLP
          February cohort, continuously refining my skills and expanding my
          knowledge. I am excited about opportunities that allow me to build,
          innovate, and contribute to impactful projects—especially in tech hubs
          like Konza Technopolis.
        </p>
        <p></p>
      </div>
      <div className="abouteme-image">
        <img src={grad3} alt="my graduation day at muranga university" />
      </div>
    </div>
  );
}

export default AboutMe;
