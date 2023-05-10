import React from "react";
import CountriesData from "../../data.json";
import styles from "@/app/page.module.css";
import Image from "next/image";

interface CountryProps extends React.ComponentPropsWithoutRef<"div"> {
  country: (typeof CountriesData)[0];
}

const Country = ({ country, ...rest }: CountryProps) => {
  return (
    <div className={styles["country-card"]} {...rest}>
      <Image
        src={country.flag}
        className={styles.flag}
        alt="country-flag"
        width={200}
        height={120}
      />
      <div className={styles.btm}>
        <h4>{country.name}</h4>
        <span>Population: {country.population}</span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </div>
  );
};

export default Country;
