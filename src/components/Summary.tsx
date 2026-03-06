import "./Summary.css";

const Summary = () => {
  return (
    <section id="summary">
      <h2 className="section-title">Professional Summary</h2>

      <div className="container">
        <div className="summary-card">
          <p>
            Full Stack Developer with hands-on experience building scalable,
            secure and performance-driven web applications using React and Node.js.
          </p>

          <ul>
            <li>Reduced CPU usage from 40% to 5% by optimizing backend modules.</li>
            <li>Designed multi-tenant architecture with secure data isolation.</li>
            <li>Integrated Azure Key Vault for secure secret management.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;