"use client";
import Country from "@/components/Card/Country";
import SearchInput from "@/components/Input/SearchInput";
import Countries from "@/components/List/Countries";
import Flex from "@/components/List/Flex";
import FilterSelect from "@/components/Select/FilterSelect";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";

export default function Home() {
  // CUSTOM SELECT OPTIONS
  const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const router = useRouter();

  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [searchResults, setSearchResults] = useState<CountryProps[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  /** `useSWR` fetcher */
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`,
    fetcher
  );

  useEffect(() => {
    if (data !== undefined) {
      setCountries(data);
    }
  }, [data]);

  if (error) {
    return (
      <div className="center">
        <p>Network Error: {error}</p>
      </div>
    );
  }

  /** Remove spaces  from country names for url passing */
  const removeSpace = (name: string) => {
    let nm = "";
    let hasSpace = name.includes(" ");
    let _sp = name.indexOf(" ");
    if (hasSpace) {
      nm = name.slice(0, _sp);
    } else {
      nm = name;
    }
    return nm;
  };

  const handleSearch = (value: string) => {
    let query = countries.filter((k) => {
      return ["name", "capital"].some((key) => {
        if (key === "name") {
          return (
            k.name.common
              .toString()
              .toLocaleLowerCase()
              .indexOf(value.toLowerCase()) > -1
          );
        } else {
          return (
            k[key].toString().toLocaleLowerCase().indexOf(value.toLowerCase()) >
            -1
          );
        }
      });
    });
    //
    setSearchResults(query);
  };

  const handleFilter = (value: string) => {
    setSelectedRegion(value)
  };

  const immutableList =
    selectedRegion === "All"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  return (
    <div className={styles.countries}>
      <Flex>
        <SearchInput handleSearch={(value) => handleSearch(value)} />
        <FilterSelect
          options={options}
          handleSelect={(value) => handleFilter(value)}
        />
      </Flex>
      <Suspense fallback={<span className={styles.loader}></span>}>
        <Countries>
          {searchResults.length > 0
            ? searchResults.map((country, index) => {
                return (
                  <Country
                    key={index}
                    country={country}
                    onNavigate={() =>
                      router.push(
                        `/country/${removeSpace(country.name.common)}`
                      )
                    }
                  />
                );
              })
            : immutableList.map((country, index) => {
                return (
                  <Country
                    key={index}
                    country={country}
                    onNavigate={() =>
                      router.push(
                        `/country/${removeSpace(country.name.common)}`
                      )
                    }
                  />
                );
              })}
        </Countries>
      </Suspense>
    </div>
  );

  /**
   * let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;
   * const handleSearch = (value: string) => {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fetchData(value)
        .then((results) => console.log(results))
        .catch((error) => console.error(error));
    }, 300); 
  };

   used for search input 
  const fetchData = async (query: string) => {
    // Perform async operations, such as fetching data from an API
    const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const data = await response.json();
    return data.results;
  }; */

  /** const handleSearch = (value: string) => {
    let data = CountriesData;

    //
    let query = data.filter((k) => k.name === value.toLocaleLowerCase());
    //

    if (query.length === 0) {
      return;
    } else {
      setCountries([...query]);
    }
  };

  const filterByRegion = (value: string) => {
    let data = CountriesData;

    //
    let returnedData: typeof CountriesData = data.filter(
      (k) => k.region === value
    );
    //
    //setCountries([...returnedData]);
  }; */
}
