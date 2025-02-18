import { useEffect, useState } from 'react';
import './Project.css';

const Project = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetching all countries
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Filter by region
  useEffect(() => {
    let filtered = countries;

    if (region !== 'All') {
      filtered = countries.filter((country) => country.region === region);
    }

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [region, searchTerm, countries]);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error}</p>;

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="container">
      <h1>Countries</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by country name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Region Filter */}
      <label htmlFor="regionFilter">Filter by Region: </label>
      <select
        id="regionFilter"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      {/* Country List */}
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index} className="card">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} className="flag" />
            <h2>{country.name.common}</h2>
            <p>Official Name: {country.name.official}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
