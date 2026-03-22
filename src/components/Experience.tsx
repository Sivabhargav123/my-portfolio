import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="container experience-wrapper">

        <div className="experience-card">

          <div className="exp-header">
            <h3>Software Engineer — Iglobal consulting Pvt Ltd</h3>
            <span>Aug 2023 – Present</span>
          </div>

          <h4>Smart Recruiter Apps</h4>
          <p>Technologies: React, TypeScript, Redux, Material UI, Formik, Axios, XLSX, HTML, CSS</p>
          <p>Description: Enhance AI/ML-powered recruitment tools, including Rolemapper, Talk to Resume, and Joining Probability tools, enhancing hiring processes with data visualization and automated workflows.</p>
          <ul>
            <li>Built the Rolemapper Tool to extract relevant job roles from descriptions using LLM APIs, featuring a paginated DataGrid with export-to-Excel and history tracking.</li>
            <li>Created the Talk to Resume Tool for uploading and querying multiple resumes, displaying results in a DataGrid with history tracking and file upload validation.</li>
            <li>Expanded the Joining Probability Tool to validate job application responses, calculate joining probability scores, and automate email invitations, with results displayed interactively.</li>
            <li>Implemented the Screening and Shortlisting Tool to extract and validate key job description details against resumes, calculating match scores and displaying results in detailed Data Grids.</li>
          </ul>

          <h4>Online Test Series (OTS) Portal</h4>
          <p>Technologies: React, Redux, JavaScript, Context API, CSS, Postman</p>
          <p>Description: Enhanced a multi-tenant architecture enabling institute-level data isolation, custom domain support and optimization of a large-scale Online Test Series used by multiple users.</p>
          <ul>
            <li>Conducted requirements gathering to define design, development, and testing workflows.</li>
            <li>Developed reusable React components and ensured consistent, responsive UI across desktop and mobile devices.</li>
            <li>Created reusable components and implemented dynamic form validation using Redux for secure data handling and key retrieval.</li>
            <li>Collaborated with testing team to troubleshoot, debug, and resolve issues, ensuring a high-quality user experience.</li>
            <li>Enabled admins to create and manage tests with or without optional sections through configurable workflows.</li>
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