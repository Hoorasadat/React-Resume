import './Highlight.css';

const PersonalSkills = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">Personal Skills</h2>

          <div className="row mt-5">

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>
                  <span className="skill">Analytical</span>
                </li>

                <li>
                  <span className="skill">Sociable</span>
                </li>

                <li>
                  <span className="skill">Systematic</span>
                </li>

                <li>
                  <span className="skill">Detail-oriented</span>
                </li>

                <li>
                  <span className="skill">Co-operative</span>
                </li>
              </ul>
            </div>

            <div className="col-md-5">
              <ul className="list-unstyled">
                <li>
                  <span className="skill">Problem solver</span>
                </li>

                <li>
                  <span className="skill">Goal-driven</span>
                </li>

                <li>
                  <span className="skill">	Results-oriented</span>
                </li>

                <li>
                  <span className="skill">Quickly adjustable</span>
                </li>

                <li>
                  <span className="skill">Collaborative team member</span>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>
                  <span className="skill">Accurate</span>
                </li>

                <li>
                  <span className="skill">Caring</span>
                </li>

                <li>
                  <span className="skill">Considerate</span>
                </li>

                <li>
                  <span className="skill">Punctual</span>
                </li>

                <li>
                  <span className="skill">Self-reliant</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;
