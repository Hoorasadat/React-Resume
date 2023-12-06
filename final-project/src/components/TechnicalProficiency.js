const TechhnicalProficiency = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">Technical proficiency</h2>
          <ul className="list-unstyled">
            <li>
              <h6 className="fw-bold">Programming Languages</h6>
              <p>
                HTML, CSS, Saas, JavaScript, C#, PHP (Familiar), Python (Familiar), TypeScript, Ruby on Rails
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Libraries/Frameworks</h6>
              <p>React, Vue (Familiar), Node, jQuery (Familiar), Bootstrap, .NET, ASP.NET</p>
            </li>

            <li>
              <h6 className="fw-bold">Development Tools</h6>
              <p>GitHub, MS Visual Studio</p>
            </li>

            <li>
              <h6 className="fw-bold">Databases/DBMS</h6>
              <p>
              PostgreSQL, Microsoft SQL Server, MySQL, Cosmos Db, Oracle DB (PL/SQL), Microsoft Access
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Cloud Environment</h6>
              <p>Microsoft Azure, Amazon Web Services (Familiar)</p>
            </li>

            <li>
              <h6 className="fw-bold">Other tools</h6>
              <p>Jira, Figma</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechhnicalProficiency;
