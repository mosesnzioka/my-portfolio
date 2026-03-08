import Title from "../title/title";
import "./education.css";
import grad2 from "../../assets/grad3-removebg-preview.png";

function Education() {
  return (
    <section className="education-section">
      <Title maintitle={"🎓 Educational Background"} />
      <div className="education-description">
        {/* ✅ Description First */}
        <div className="education-text">
          <p>
            My journey in technology and software development began at{" "}
            <strong>Murang’a University of Technology</strong>, where I earned a
            degree in <strong>Information Technology</strong>. During my time
            there, I gained a strong foundation in{" "}
            <i>
              programming, software development, database management, and
              problem-solving
            </i>
            , which set the stage for my career as a full-stack web developer.
          </p>
          <p>
            Beyond the classroom, I was actively involved in practical projects
            that allowed me to apply my knowledge in{" "}
            <strong>real-world scenarios</strong>. One of the most impactful
            moments was joining the <strong>Teach2Give cohort</strong>, where I
            gained hands-on experience building apps using{" "}
            <strong>
              React, JavaScript, HTML, CSS frameworks, ExpressJs, Git & GitHub,
              Node.js, PostgreSQL
            </strong>
            .
          </p>
          <p>
            Currently, I am part of the{" "}
            <strong>Power Learn Project (PLP) February Cohort</strong>, a
            program designed to equip developers with modern tech skills.
            Through this, I’m refining my expertise in{" "}
            <strong>full-stack development</strong>, learning new technologies,
            and building scalable, high-performance applications.
          </p>
          <p>
            My educational path has shaped me into a{" "}
            <strong>problem-solving, innovation-driven developer</strong> ready
            to contribute to impactful real-world projects.
          </p>
        </div>

        {/* 🖼️ Image Second */}
        <div className="education-image">
          <img src={grad2} alt="Graduation picture at Murang’a University" />
        </div>
      </div>
    </section>
  );
}

export default Education;
