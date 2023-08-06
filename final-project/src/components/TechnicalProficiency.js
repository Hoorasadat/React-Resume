const TechhnicalProficiency = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">Technical proficiency</h2>
          <ul className="list-unstyled">
            <li>
              <h6 className="fw-bold">Languages</h6>
              <p>
                HTML, CSS, SCSS, JavaScript, TypeScript, C#, PHP, Python, Ruby
                on Rails
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Libraries/Frameworks</h6>
              <p>React, Vue, Node, jQuery, Bootstrap</p>
            </li>

            <li>
              <h6 className="fw-bold">Platforms</h6>
              <p>GitHub, MS Visual Studio</p>
            </li>

            <li>
              <h6 className="fw-bold">Databases/DBMS</h6>
              <p>
                Cosmos DB, MySQL, PostgreSQL, Microsoft SQL Server, Oracle DB
                (PL/SQL), Microsoft Access
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Cloud Environment</h6>
              <p>Microsoft Azure, Amazon Web Services</p>
            </li>

            <li>
              <h6 className="fw-bold">Applications</h6>
              <p>Jira, Figma</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechhnicalProficiency;
