import Title from "../title/title";
import "./education.css";

function Education() {
  return (
    <div className="education-section">
        <Title maintitle={"🎓 Educational Background"} />
        <div className="education-description">
        <p >My journey in technology and software development began at <strong>Murang’a University of Technology</strong> , where I earned a degree in
       <strong>Information Technology</strong>During my time there, I gained a strong foundation in <i>programming, software development, database management, and problem-solving,</i>
       which set the stage for my career as a full-stack web developer. <br />
       Beyond the classroom, I was actively involved in practical projects that allowed me to apply my knowledge in 
       <strong>real-world scenarios.</strong> One of the most impactful moments in my learning journey was joining the
       <strong>Teach2Give cohort,</strong> where I got hands-on experience in developing web applications using 
       <strong>React, JavaScript, Html, CSS frameworks, EpressJs, Git & Github, Node.js, PostgreSQL,</strong>
       and other modern technologies. This experience not only refined my technical skills but also strengthened my ability to work in a
       <strong>team-oriented, collaborative environment.</strong>.<br /> Currently, I am part of the
       <strong>Power Learn Project (PLP) February Cohort,</strong> 
       a transformative program designed to equip developers with the latest industry skills. Through this initiative, I am continuously refining my expertise in <strong>
       full-stack development,</strong>  exploring new technologies, and building scalable, high-performance applications. <br />
       My educational journey has shaped me into a <strong>problem-solving, innovation-driven developer,</strong> 
       and I am always eager to apply my skills in <strong>real-world projects that make a lasting impact.</strong></p>

       <div className="download-cv-link">
       <a href="/path-to-your-cv.pdf" download className="cv-button">Download My CV</a>

       </div>
       
        </div>


    </div>
  );
}

export default Education;
