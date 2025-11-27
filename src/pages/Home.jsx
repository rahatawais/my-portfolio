import "./Home.css";

const Home = () => {
  return (
    <div className="content home-card fade-page">
      <div className="hero-section">
        <h1 className="hero-title">Hi, I'm <span>Rahat Latif</span></h1>
        <p className="hero-text">
          Front-End Developer focused on building clean, responsive, 
          user-friendly interfaces using HTML, CSS, Bootstrap, and React. 
          Passionate about writing structured code and crafting simple, modern UI.
        </p>
      </div>

      <div className="skills-section">
        <h4 className="section-title">Skills</h4>
        <ul className="skills-list">
          <li>HTML5, CSS3, Bootstrap</li>
          <li>React.js (components, props, state, hooks)</li>
          <li>Responsive Web Design & UI Layout</li>
          <li>JavaScript Fundamentals</li>
          <li>SQL Basics</li>
          <li>C++ & Java (academic projects)</li>
          <li>Machine Learning Research (Firmware Security / IoT)</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
