import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";
import {
  faRemove,
  faRemoveFormat,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchInputProps {
  handleSearch: (value: string) => void;
}

const SearchInput = ({ handleSearch }: SearchInputProps) => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let input = inputRef.current!;

    input.addEventListener("focusin", function () {
      setIsTyping(true);
    });

    input.addEventListener("focusout", function () {
      setIsTyping(false);
    });
    return () => {
      input.removeEventListener("focusin", function () {
        setIsTyping(true);
      });

      input.removeEventListener("focusout", function () {
        setIsTyping(false);
      });
    };
  }, []);

  return (
    <div className={styles.searchbar}>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        ref={inputRef}
        type="text"
        name="search-input"
        id="search-input"
        placeholder="search for a country..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      {isTyping && (
        <span
          style={{ cursor: "pointer", position: "absolute", right: "0" }}
        >
          <FontAwesomeIcon icon={faRemove} />
        </span>
      )}
    </div>
  );
};

export default SearchInput;

/**useEffect(() => {
    if (isTyping) {
      handleSearch(searchValue)
    }
  }, [handleSearch, isTyping, searchValue]) */