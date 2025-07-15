import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../Layout/CountryCard";
import SearchFilter from "../ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div>
      <section className="country-section mt-5">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          Filter={Filter}
          setFilter={setFilter}
        />

        <div className="row gy-2">
          {countries.map((curCountry) => (
            <CountryCard country={curCountry} key={curCountry.name.common} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Country;
