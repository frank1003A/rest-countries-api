"use client";
import Flex from "@/components/Flex";
import styles from "./page.module.css";
import SearchInput from "@/components/Input/SearchInput";
import FilterSelect from "@/components/Select/FilterSelect";
import Countries from "@/components/List/Countries";
import CountriesData from "../../data.json";
import Country from "@/components/Country";
import { useEffect, useState } from "react";
import Link from "next/link";

export default async function Home() {
  const [countries, setCountries] = useState<typeof CountriesData>([
    ...CountriesData,
  ]);
  const [searchValue, setSearchValue] = useState<string>("");
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const filterByRegion = (value: string) => {
    let data = CountriesData;

    //
    let returnedData: typeof CountriesData = data.filter(
      (k) => k.region === value
    );
    //
    setCountries([...returnedData]);
  };

  const handleSearch = (value: string) => {
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

  return (
    <main className={styles.countries}>
      <Flex>
        <SearchInput handleSearch={(value) => handleSearch(value)} />
        <FilterSelect
          options={options}
          handleSelect={(value) => filterByRegion(value)}
        />
      </Flex>
      <Countries>
        {countries.map((country, index) => {
          return (
            <Link key={`${index}_${country}`} href={`/country/${country.name}`}>
              <Country country={country} />
            </Link>
          );
        })}
      </Countries>
    </main>
  );
}
