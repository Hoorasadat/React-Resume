const RelatedEducation = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title mb-5">Education</h2>
          <ul className="list-unstyled">
            <li>
              <h6 className="fw-bold">
                Full-Stack Software Development (Certificate)
              </h6>
              <h6 className="fw-bold">June 2023 - September 2023</h6>
              <p>SAIT, Calgary, Alberta</p>
            </li>
            <li>
              <h6 className="fw-bold">
                Object Oriented Software Development (Certificate)
              </h6>
              <h6 className="fw-bold">January 2019 - June 2019</h6>
              <p>SAIT, Calgary, Alberta</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RelatedEducation;
