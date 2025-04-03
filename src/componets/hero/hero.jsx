import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "../title/title";
import "./hero.css";
function Hero() {
  return (
    <div className="my-hero-sec">
      <div className="discription">
        <h2>personal summary</h2>
        <p>
          I am a reliable, organized, and self-motivated individual who thrives
          on challenges and excels in both independent work and collaboration
          within a cohesive team. I am dedicated to delivering impactful
          results, quickly adapting to new systems and procedures while working
          with initiative, commitment, and attention to detail.
        </p>
        <div className="download-cv-link">
          <a href="https://github.com/mosesnzioka" target="_blank">
            project's done
          </a>
        </div>
      </div>

      <div className="social-media-links">
        <h2>lets link here</h2>
        <div>
          <a href="mailto:mosesnzioka1@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              size="2x"
              color="white"
            />
          </a>

          <a href="https://www.linkedin.com/in/mosesnzioka/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
          </a>

          <a href="https://github.com/mosesnzioka" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
        </div>
        <div className="download-cv-link">
          <a href="../../../public/Moses Nzioka Resume (4).pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
