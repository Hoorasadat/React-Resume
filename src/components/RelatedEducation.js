import './Timeline.css';

const RelatedEducation = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body mb-3">
          <h2 className="card-title mb-5">Education</h2>
            <div className="col-md-12">
              <ul className="timeline-1">

                <li className="event" data-date="Jun 2023 - Sep 2023" type="Certificate">
                  <h5 className="mb-3">Full-Stack Software Development</h5>
                  <h6 className="mb-3">SAIT, Calgary, Alberta</h6>
                </li>

                <li className="event" data-date="Jun 2023 - Sep 2023" type="Certificate">
                  <h5 className="mb-3">Object Oriented Software Development</h5>
                  <h6 className="mb-3">SAIT, Calgary, Alberta</h6>
                  <h7 className="mb-3">GPA: 4.0/4.0 (Top Student with Honors)</h7>
                </li>

              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedEducation;
