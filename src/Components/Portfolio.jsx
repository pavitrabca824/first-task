import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/posts").then((res) => {

        return res.json();

    }).then((resp) => {

        setPortfolioData(resp);

    }).catch((err) => {

        console.log(err.message);

    })

}, [])

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {portfolioData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
