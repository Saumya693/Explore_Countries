import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../api/postApi";

const CountryDetails = () => {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getCountryIndData(params.id);
        if (res.status === 200) {
          setCountry(res.data[0]);
          console.log(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !country) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="card country-detail-card container p-4 my-5 shadow">
      <div className="container-card bg-white-box text-center">
        <img
          src={country.flags?.svg}
          alt={country.flags?.alt || "Country Flag"}
          style={{ width: "200px", height: "auto" }}
        />
        <h2 className="mt-3">{country.name?.common}</h2>

        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region || "N/A"}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion || "N/A"}
        </p>
        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString() || "N/A"}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.tld?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((c) => `${c.name} (${c.symbol})`)
                .join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Borders:</strong> {country.borders?.join(", ") || "None"}
        </p>
      </div>
      <div className="country  mt-4">
        <NavLink to="/country">
          <button className="btn  ">Go back</button>
        </NavLink>
      </div>
    </section>
  );
};

export default CountryDetails;
