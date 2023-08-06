const PersonalSkills = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">Personal skills</h2>

          <div className="row mt-3">

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>
                  <h6>Analytical</h6>
                </li>

                <li>
                  <h6>Sociable</h6>
                </li>

                <li>
                  <h6>Systematic</h6>
                </li>

                <li>
                  <h6>Detail-oriented</h6>
                </li>

                <li>
                  <h6>Co-operative</h6>
                </li>
              </ul>
            </div>

            <div className="col-md-5">
              <ul className="list-unstyled">
                <li>
                  <h6>Problem solver</h6>
                </li>

                <li>
                  <h6>Goal-driven</h6>
                </li>

                <li>
                  <h6>	Results-oriented</h6>
                </li>

                <li>
                  <h6>Quickly adjustable</h6>
                </li>

                <li>
                  <h6>Collaborative team member</h6>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>
                  <h6>Accurate</h6>
                </li>

                <li>
                  <h6>Caring</h6>
                </li>

                <li>
                  <h6>Considerate</h6>
                </li>

                <li>
                  <h6>Punctual</h6>
                </li>

                <li>
                  <h6>Self-reliant</h6>
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
