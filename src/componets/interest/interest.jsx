import "./interest.css";
import Title from "../title/title";
import Interest from "../data/interest";

function InterestCard({ thumbnail, Name, description }) {
  return (
    <div className="interest-card">
      <img src={thumbnail} alt={Name} className="interest-image" />
      <h2 className="interest-title">{Name}</h2>
      <p className="interest-description">{description}</p>
    </div>
  );
}

function MyInterest() {
  return (
    <section className="interest-section">
      <Title maintitle="💡 My Interests" />
      <p className="interest-intro">
        As a passionate <strong>full-stack web developer,</strong> I am
        constantly exploring new technologies and refining my skills to stay
        ahead in the fast-evolving tech industry. Below are some of the key
        areas that fuel my curiosity and drive.
      </p>

      <div className="interest-container">
        {Interest.map((interest, i) => (
          <InterestCard
            key={i}
            thumbnail={interest.thumbnail}
            Name={interest.Name}
            description={interest.description}
          />
        ))}
      </div>
    </section>
  );
}

export default MyInterest;
