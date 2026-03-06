
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="container skills-grid">

        <div className="card">
          <h3>PG@eGRADTutor</h3>
          <p style={{ marginTop: "10px", color: "#94a3b8" }}>
            React game with CI/CD integration.
          </p>
          <a href="#" className="btn btn-outline" style={{ marginTop: "15px" }}>
            <strong><a style={{textDecoration:"none", color: "#94a3b8" }} href="https://onlinepg.egradtutor.in/"> Project Link</a></strong>
          </a>
        </div>

        <div className="card">
          <h3>UG@eGRADTutor</h3>
          <p style={{ marginTop: "10px", color: "#94a3b8" }}>
            Modern responsive portfolio using React.
          </p>
          <a href="#" className="btn btn-outline" style={{ marginTop: "15px" }}>
            <strong><a style={{textDecoration:"none" ,color: "#94a3b8" }} href="https://onlineug.egradtutor.in/"> Project Link</a></strong>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;