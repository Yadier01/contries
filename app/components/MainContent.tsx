"use client";
import React, { useState, useCallback } from "react";
import { Countries } from "./Countries";

interface Country {
  name: string;
  region: string;
}

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export const MainContent = () => {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("All");

  const findCountry = useCallback(
    (country: Country) => {
      const nameMatch = country.name
        .toLowerCase()
        .includes(input.trim().toLowerCase());
      const regionMatch = region === "All" || country.region === region;
      return nameMatch && regionMatch;
    },
    [input, region]
  );

  const handleRegionChange = useCallback((e: any) => {
    setRegion(e.target.value);
  }, []);

  return (
    <>
      <div className="lg:mx-20 mx-8 flex flex-col">
        <div className="lg:flex justify-between items-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="text-white bg-[#2B3945] p-3 w-full lg:w-1/3 rounded-md shadow-sm my-7"
            placeholder="Search for a country"
          />
          <select
            className="text-white w-44 lg:w-64 p-4 shadow-sm bg-[#2B3945]  rounded-md "
            name="filterRegion"
            onChange={handleRegionChange}
          >
            {regions.map((regionOption) => (
                <option  
                    className="p-8  text-black rounded-md" 
                    key={regionOption} 
                    value={regionOption}
                >
                    {regionOption}
                </option>
            ))}
          </select>
        </div>
        <Countries findCountry={findCountry} />
      </div>
    </>
  );
};
