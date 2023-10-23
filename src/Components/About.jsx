import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/posts").then((res) => {

        return res.json();

    }).then((resp) => {

        setAboutData(resp);

    }).catch((err) => {

        console.log(err.message);

    })

}, [])

  return (
    <div className="container">
      <h2>About Us</h2>
      <ul>
        {aboutData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
