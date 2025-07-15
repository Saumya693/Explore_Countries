import React from "react";
import { NavLink } from "react-router-dom";
import CountryDetails from "./CountryDetails";
const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="col-lg-3 mb-4 mt-5  container ">
      <div className="card shadow-sm text-center big border">
        <img
          src={flags.svg}
          alt={flags.alt || "Country Flag"}
          className="card-img-top p-4 shadow-sm "
          style={{ height: "160px", objectFit: "cover" }}
        />
        <div className="card-body ">
          <h5 className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </h5>
          <p className="card-text mb-1">
            <strong>Capital:</strong> {capital?.[0]}
          </p>
          <p className="card-text mb-1">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="card-text">
            <strong>Region:</strong> {region}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button className="button">Read More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
