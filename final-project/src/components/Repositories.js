import React, { useState, useEffect } from 'react';

const Repositories = ( {styles} ) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = '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';

    fetch('https://api.github.com/users/hoorasadat/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching repositories: {error.message}</div>;
  }

  return (
    <div className="col-md mb-3">
      <div className="card" style={styles}>
        <div className="card-body">
          <h2 className="card-title">My GitHub Repositories</h2>
          <ul className="list-unstyled">
						{repositories.length > 0 ? (repositories.map(repo => (
						<li key={repo.id}>
							<a
								href={repo.html_url} target="_blank" rel="noopener noreferrer"
								className="fs-6 text-decoration-none"
							>
								{repo.name}
							</a>
						</li>
						))) :
            (<li className="fs-5 text-danger">It seems that the access token for repositories has expired!</li>)
            }
					</ul>
				</div>
			</div>
		</div>
  );
};

export default Repositories;
