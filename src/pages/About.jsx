import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <div>
      <section className="section-about container">
        <h2 className="container-title text-center mb-4">
          Here are the Interesting Facts
          <br />
          We're proud of
        </h2>

        <div className="row">
          {countryFacts.map(
            ({ id, countryName, capital, population, interestingFact }) => (
              <div className="col-md-4 mb-4" key={id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body bg-blue-box">
                    <h5 className="card-title">{countryName}</h5>
                    <p>
                      <strong>Id:</strong> {id}
                    </p>
                    <p>
                      <strong>Capital:</strong> {capital}
                    </p>
                    <p>
                      <strong>Population:</strong> {population}
                    </p>
                    <p>
                      <strong>Interesting Fact:</strong> {interestingFact}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
