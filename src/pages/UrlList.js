import React, { useEffect, useState } from 'react';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Fetch URLs from the backend
    fetch('https://your-backend-api/urls')
      .then(response => response.json())
      .then(data => setUrls(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <h2>URL List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url => (
            <tr key={url.id}>
              <td><a href={url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a></td>
              <td>{url.longUrl}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
