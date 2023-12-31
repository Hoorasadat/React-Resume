import React, { useState, useEffect } from 'react';

const Repositories = ({ styles }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepositories = async () => {
    const apiUrl = 'https://api.github.com/users/hoorasadat/repos';
    let allRepos = [];

    try {
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await fetch(`${apiUrl}?page=${page}&per_page=30`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          allRepos = [...allRepos, ...data];
          page++;
        } else {
          hasNextPage = false;
        }
      }

      // Sort repositories chronologically, newest first
      allRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      setRepositories(allRepos);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
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
          <h2 className="card-title mb-5">My GitHub Repositories</h2>
          <div className="row">
            {repositories.map(repo => (
              <div key={repo.id} className="col-md-4 mb-3">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">{repo.name}</h6>
                  <p className="card-text">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {repo.html_url}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
