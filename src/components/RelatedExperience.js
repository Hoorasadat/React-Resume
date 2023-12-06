const RelatedExperience = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">Related experience</h2>
          <ul className="list-unstyled">
            <li>
              <h6 className="fw-bold">
                Full-Stack Developer / Child Friendly Care
              </h6>
              <h6 className="fw-bold">
                May 2020 - August 2020
              </h6>
              <p>
                Developing a web application for a daycare startup using Azure
                Functions with C# for serverless API backend, and Quasar
                framework for single page application plus Cosmos DB as a NoSQL
                database
              </p>
            </li>
            <li>
              <h6 className="fw-bold">
                Full-Stack Developer / Payload Technologies Inc.
              </h6>
              <h6 className="fw-bold">
                July 2019 - April 2020
              </h6>
              <p>
                Creating a new digitalized logistic web application using Vue.js
                for the front end, Node.js for the backend, On-Prem PostgreSQL
                database, and AWS Lambda as the serverless infrastructure
                Customizing and improving an existing digitalized logistics
                system: A web application using HTML, CSS and React for the
                front end, Ruby on Rails for the backend, and On-Prem PostgreSQL
                database Two mobile apps (Android and iOS) using Java and Swift
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RelatedExperience;
