import Title from "../title/title";
import Projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

function DoneProjects({
  screenshort,
  Pname,
  Pdescription,
  projectlink,
  downloadlink,
}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={screenshort} alt={Pname} />
      </div>
      <div className="project-details">
        <h2 className="project-title">{Pname}</h2>
        <p className="project-description">{Pdescription}</p>
      </div>

      <div className="project-links">
        <a
          href={projectlink}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          title="View Live Project"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <a
          href={downloadlink}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          title="Download Project"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
}

function MyProjects() {
  return (
    <section className="projects-section">
      <Title maintitle="Projects" />
      <div className="projects-grid">
        {Projects.map((projects, i) => (
          <DoneProjects
            key={i}
            screenshort={projects.screenshort}
            Pname={projects.Pname}
            Pdescription={projects.Pdescription}
            projectlink={projects.projectlink}
            downloadlink={projects.downloadlink}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
