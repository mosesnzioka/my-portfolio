import grad3 from "../../assets/mkuhck-removebg-preview.png";
import Title from "../title/title";
import "./aboutme.css";

function AboutMe() {
  return (
    <section className="aboutme-section">
      <Title maintitle="About Me" />
      <div className="aboutme-description">
        {/* Image First */}
        <div className="aboutme-image">
          <img src={grad3} alt="Graduation day at Murang'a University" />
        </div>

        {/* Description */}
        <div className="aboutme-text">
          <p>
            I am a passionate and results-driven full-stack web developer with
            expertise in HTML, CSS, JavaScript, React, Node.js, Express.js,
            PostgreSQL, and MySQL. With a strong foundation in both front-end
            and back-end development, I specialize in building scalable,
            user-friendly, and efficient web applications.
          </p>
          <p>
            I thrive in problem-solving environments where I can apply my
            technical skills to create impactful solutions. My adaptability to
            new technologies enables me to stay ahead in the fast-evolving tech
            industry. I’ve worked on real-world projects, including a blog
            platform for Teach2Give, enhancing both code optimization and
            database management.
          </p>
          <p>
            Whether working independently or in teams, I commit to delivering
            high-quality, maintainable, and innovative software. I'm currently
            part of the PLP February cohort, continuously refining my skills.
            I'm excited about roles that let me build, innovate, and contribute
            to tech hubs like Konza Technopolis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
