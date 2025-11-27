import "./About.css";

const About = () => {
  return (
    <div className="content about-card fade-page">
      <div className="about-section">
        <h2 className="section-heading">About Me</h2>
        <p className="about-text">
          Front-End Developer with a strong academic foundation in Computer Science and growing
          hands-on experience in building responsive, aesthetically refined web interfaces. Skilled
          in HTML, CSS, Bootstrap, and React, with a focus on clean layouts, reusable components,
          and smooth user interactions.
        </p>

        <p className="about-text">
          Completed a Master’s degree in Computer Science with research involving firmware security
          for IoT devices using machine learning techniques. Passionate about continuous learning,
          improving UI patterns, and elevating design quality step by step.
        </p>
      </div>

      <div className="sub-section">
        <h4 className="sub-heading">Education</h4>
        <div className="edu-box">
          <p className="edu-title">Master of Science (MS) in Computer Science</p>
          <p className="edu-school">Government Sadiq Women University</p>
        </div>
      </div>

      <div className="sub-section">
        <h4 className="sub-heading">Sample Work & Interests</h4>
        <ul className="interest-list">
          <li>Static and responsive landing pages using HTML, CSS, Bootstrap.</li>
          <li>React components with routing, state, and props.</li>
          <li>Clean sidebar layouts and modern card-based UI patterns.</li>
          <li>Interest in UI/UX, typography, spacing, and intuitive layouts.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
