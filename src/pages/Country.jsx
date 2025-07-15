import React, { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../Layout/CountryCard";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      filterRegion === "All" ||
      country.region?.toLowerCase() === filterRegion.toLowerCase();

    const matchesSearch = country.name?.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCountries = filteredCountries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          placeholder="Search by country name"
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="form-select w-auto"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="12">Show 12</option>
          <option value="24">Show 24</option>
          <option value="36">Show 36</option>
          <option value="60">Show 60</option>
          <option value="80">Show 80</option>
        </select>
      </div>

      <div className="mb-4 text-center">
        {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
          (region) => (
            <button
              key={region}
              onClick={() => {
                setFilterRegion(region);
                setCurrentPage(1);
              }}
              className={`btn mx-1 ${
                filterRegion === region
                  ? "btn-secondary"
                  : "btn-outline-primary"
              }`}
            >
              {region}
            </button>
          )
        )}
      </div>

      <div className="row gy-3">
        {paginatedCountries.length > 0 ? (
          paginatedCountries.map((country) => (
            <CountryCard country={country} key={country.name?.common} />
          ))
        ) : (
          <p className="text-center">No countries found.</p>
        )}
      </div>

      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-outline-secondary mx-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-outline-secondary mx-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Country;
