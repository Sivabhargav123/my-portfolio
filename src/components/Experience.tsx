import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="container experience-wrapper">

        <div className="experience-card">

          <div className="exp-header">
            <h3>Web Developer — eGRADTutor</h3>
            <span>Mar 2024 – Feb 2025</span>
          </div>

          <h4>UG & PG Online Test Series Platform</h4>
          <ul>
            <li>Owned end-to-end development and optimization of a large-scale Online Test Series (OTS) platform used by multiple institutes.</li>
            <li>Designed and implemented multi-tenant architecture enabling institute-level data isolation and custom domain support.</li>
            <li>Improved page load times and API performance using indexing, query optimization, and efficient React state management.</li>
            <li>Integrated Azure Key Vault with Managed Identity in Node.js for secure secret management.</li>
            <li>Developed reusable React components with responsive UI across devices.</li>
            <li>Optimized test timer performance using React Context API to minimize re-renders.</li>
            <li>UG@eGRADTutor<strong><a href="https://onlineug.egradtutor.in/"> Project Link</a></strong></li>
          </ul>

          <h4>GATE PG Online Test Series</h4>
          <ul>
            <li>Implemented dynamic optional departments matching official GATE interface.</li>
            <li>Enabled configurable admin workflows for optional sections.</li>
            <li>Built resume-test functionality for continuing assessments.</li>
            <li>Developed scientific calculator using regex-based expression parsing.</li>
            <li>Wrote comprehensive test cases ensuring reliability during concurrent logins.</li>
            <li>PG@eGRADTutor <strong><a href="https://onlinepg.egradtutor.in/"> Project Link</a></strong></li>
          </ul>

          <h4>Platform Performance & Admin Tooling</h4>
          <ul>
            <li>Refactored legacy React and Node.js code to eliminate memory leaks and fix performance bottlenecks.</li>
            <li>Built admin tooling for bulk question uploads with strong validation.</li>
            <li>Implemented dynamic runtime theming while maintaining responsiveness.</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Experience;