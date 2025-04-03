import Title from "../title/title";
import Projects from "../data/projects";

function DoneProjects({ screenshort, Pname, Pdescription }) {
  return (
    <div>
      <div>
        <Title maintitle={"projects"} />
        <div>
          <img src={screenshort} alt={Pname} />
        </div>
        <div>
          <h2>{Pname}</h2>
          <p>{Pdescription}</p>
        </div>
      </div>

      <div>
        <Title maintitle={"contact me"} />
        <h2>contact form</h2>
      </div>
    </div>
  );
}

function MyProjects() {
  return (
    <section>
      <div>
        {Projects.map((projects, i) => (
          <DoneProjects
            key={i}
            screenshort={projects.screenshort}
            Pname={projects.Pname}
            Pdescription={projects.Pdescription}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
