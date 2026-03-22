import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">Education & Certifications</h2>

      <div className="container education-wrapper">
       
        <div className="education-card">
          <h3>Bachelor's Degree</h3>
          <span>B.Com (Computer Applications)</span>
          <span>Sri Sai Sidhartha Degree College, Anantapur</span>
        </div>

        <div className="certifications">
          <h4>Certification</h4>
          <p>MERN Stack Certification — CCBP NXT Wave Solutions</p>
        </div>

      </div>
    </section>
  );
};

export default Education;