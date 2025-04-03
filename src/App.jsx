import "./App.css";
import Headers from "./componets/header/headers";
import Hero from "./componets/hero/hero";
import AboutMe from "./componets/about/aboutme";
import Education from "./componets/education/education";
import MyInterest from "./componets/interest/interest";
import MyProjects from "./componets/projects/projects";
function App() {
  return (
    <>
      <Headers />
      <Hero />
      <AboutMe />
      <Education />
      <MyInterest />
      <MyProjects />
    </>
  );
}

export default App;
