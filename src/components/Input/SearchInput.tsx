
import React from "react";
import styles from "@/app/page.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchInputProps {
  //value: string;
  handleSearch: (value: string) => void;
}

const SearchInput = ({ handleSearch }: SearchInputProps) => {
  return (
    <div className={styles.searchbar}>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="search for a country..."
        onChange={(event) =>  handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
