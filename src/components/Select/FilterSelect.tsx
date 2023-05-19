import styles from "@/app/page.module.css";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface FilterSelectProps extends React.ComponentPropsWithoutRef<"div"> {
  options: string[];
  handleSelect: (value: string) => void;
}

const FilterSelect = ({ options, handleSelect }: FilterSelectProps) => {
  // HOOKS
  const [selected, setSelected] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  // TOGGLE FUNCTIONS
  const handleToggle = () => setToggle(!toggle);

  const handleOptionSelect = (value: string) => {
    setSelected(value);
    handleSelect(value)
    handleToggle()
  };

  const handleClickOutside = () => {
    setToggle(false);
  };

  // REF
  const selRef = useRef<HTMLDivElement>(null);

  // hook to handle when user clicks outside the select
  useOnClickOutside(selRef, handleClickOutside);

  const selectOptions: SelectOption[] = options.map((option) => ({
    value: option,
    label: option,
  }));

  const optionList = selectOptions.map((option) => (
    <option
      className={styles.option}
      key={option.value}
      value={option.value}
      onClick={() => handleOptionSelect(option.value)}
    >
      {option.label}
    </option>
  ))

  return (
    <div className={styles.select} ref={selRef}>
      <div className={styles.selected} onClick={handleToggle}>
        <div>{selected ? selected : "All"}</div>
        <div>
          <FontAwesomeIcon icon={toggle ? faAngleUp : faAngleDown} />
        </div>
      </div>

      <div className={toggle ? styles.options : styles["no-display"]}>
        {optionList}
      </div>
    </div>
  );
};

export default FilterSelect;
