const AdditionalEducation = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title mb-5">Additional education</h2>
          <div className="col-md-12">
            <ul className="timeline-1">
              <li className="event" data-date="Sep 2005 - May 2007" type="Certificate">
                <h5 className="mb-3">M.Sc. in Industrial Engineering, Industries</h5>
                <h6 className="mb-3"><a rel="noopener noreferrer" target="_blank" href="https://www.ustmb.ac.ir/En">Mazandaran University of Science and Technology</a></h6>
                <span className="mb-3">GPA: 4.0/4.0 (Top Student with Honors)</span>
              </li>

              <li className="event" data-date="Sep 2001 - Jun 2005" type="Certificate">
                <h5 className="mb-3">OB.Sc. in Industrial Engineering, Planning and Systems Analysis</h5>
                <h6 className="mb-3"><a rel="noopener noreferrer" target="_blank" href="https://www.ustmb.ac.ir/En">Mazandaran University of Science and Technology</a></h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalEducation;
