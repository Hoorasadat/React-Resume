import './Timeline.css';

const AdditionalExperience = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title mb-5">Additional experience</h2>
          <div className="col-md-12">
            <ul className="timeline-1">
              <li className="event" data-date="Oct 2012-Jan 2018" type="Full Time">
                <h5 className="mb-3">Business Process Analyst / HR Analyst</h5>
                <h6 className="mb-3">Pars Energy-Gostar Drilling & Exploration (PEDEX) Co.</h6>
                <p>
                  Establishing and administrating web-based office automation systems (Correspondence system-HR system) Designing different organizational process and preparing the related work flows and manuals Contributing in establishment of ISO 9001:2015 Improving organizational chart and participated in the preparation of Company and HR strategic planning
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalExperience;
