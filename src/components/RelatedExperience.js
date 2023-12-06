import './Timeline.css';

const RelatedExperience = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title mb-5">Related Experience</h2>
          <div className="col-md-12">
            <ul className="timeline-1">
              <li className="event" data-date="Jun 2023 – now" type="Part Time">
                <h5 className="mb-3">Full-Stack Developer</h5>
                <h6 className="mb-3"><a rel="noopener noreferrer" target="_blank" href="https://www.immigranttechies.ca/">Immigrant Techies Alberta</a></h6>
                <p>
                  Developing a web application (Community Connect) for the Immigrant Techies Alberta group on top of a PERN stack plus SCSS, TypeScript, and Sequelize as an ORM library
                </p>
              </li>

              <li className="event next" data-date="Sep 2020 – May 2023" type="Part Time">
                <h5 className="mb-3">Freelancing and Upskilling </h5>
                <h6 className="mb-3">Freelance Software Development and Self-Learning</h6>
                Dedicating to self-learning and freelancing to further enhance skills and knowledge:
                <ul>
                  <li>
                    Self-studying/ improving proficiency in HTML, CSS, JavaScript, C#, PHP, Python, React, Vue, Node, .Net, SQL server, and PostgreSQL
                  </li>

                  <li>
                    Engaging in freelance software development projects
                  </li>
                </ul>
              </li>

              <li className="event next" data-date="May 2020 – Aug 2020" type="Part Time">
                <h5 className="mb-3">Full-Stack Developer</h5>
                <h6 className="mb-3"><a rel="noopener noreferrer" target="_blank" href="https://www.footprintsforlearningpreschool.com//">Child Friendly Care (Footprints for Learning Preschool Ltd.)</a></h6>
                <p>
                  Developing a web application for a daycare startup using Azure Functions with C# for serverless API backend, and Quasar framework for single page application plus Cosmos DB as a NoSQL database
                </p>
              </li>

              <li className="event next" data-date="Jul 2019 – April 2020" type="Full Time">
                <h5 className="mb-3">Full-Stack Developer</h5>
                <h6 className="mb-3"><a rel="noopener noreferrer" target="_blank" href="https://payload.com/">Payload Technologies Inc.</a></h6>
                <ul>
                  <li>
                    Creating a new digitalized logistic web application using Vue.js for the front end, Node.js for the backend, On-Prem PostgreSQL database, and AWS Lambda as the serverless infrastructure
                  </li>

                  <li>
                    Customizing and improving an existing digitalized logistics system:
                    <br />
                      •	A web application using HTML, CSS and React for the front end, Ruby on Rails for the backend, and On-Prem PostgreSQL database
                    <br />
                      •	Two mobile apps (Android and iOS) using Java and Swift
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedExperience;
