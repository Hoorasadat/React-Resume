import './Highlight.css';

const TechhnicalProficiency = ( {styles} ) => {
  return (
    <div className="col-md">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title mb-5">Technical proficiency</h2>
          <ul className="list-unstyled">
            <li>
              <h6 className="fw-bold">Programming Languages:</h6>
              <p>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">Saas</span>
                <span className="skill">JavaScript</span>
                <span className="skill">C#</span>
                <span className="skill">PHP (Familiar)</span>
                <span className="skill">Python (Familiar)</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Ruby on Rails</span>
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Libraries/Frameworks:</h6>
              <p>
                <span className="skill">React</span>
                <span className="skill">Vue (Familiar)</span>
                <span className="skill">Node</span>
                <span className="skill">jQuery (Familiar)</span>
                <span className="skill">Bootstrap</span>
                <span className="skill">.NET</span>
                <span className="skill">ASP.NET</span>
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Development Tools:</h6>
              <p>
                <span className="skill">GitHub</span>
                <span className="skill">MS Visual Studio</span>
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Databases/DBMS:</h6>
              <p>
                <span className="skill">PostgreSQL</span>
                <span className="skill">Microsoft SQL Server</span>
                <span className="skill">MySQL</span>
                <span className="skill">Cosmos Db</span>
                <span className="skill">Oracle DB (PL/SQL)</span>
                <span className="skill">Microsoft Access</span>
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Cloud Environment:</h6>
              <p>
                <span className="skill">Microsoft Azure</span>
                <span className="skill">Amazon Web Services (Familiar)</span>
              </p>
            </li>

            <li>
              <h6 className="fw-bold">Other Tools:</h6>
              <p>
                <span className="skill">Jira</span>
                <span className="skill">Figma</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechhnicalProficiency;
