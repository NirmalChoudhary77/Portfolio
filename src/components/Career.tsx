import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, CSE</h4>
                <h5>Anand International College of Engineering</h5>
              </div>
              <h3>2023 - 27</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science and Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
