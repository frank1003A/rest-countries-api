import React, { useRef, useState } from "react";
import styles from "@/app/page.module.css";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface FilterSelectProps extends React.ComponentPropsWithoutRef<"div"> {
  options: string[];
  handleSelect?: (value: string) => void;
}

const FilterSelect = ({ options, handleSelect }: FilterSelectProps) => {
  // HOOKS
  const [selected, setSelected] = useState<(typeof options)[0]>();
  const [toggle, setToggle] = useState<boolean>(false);

  // TOGGLE FUNCTIONS
  const handleToggle = () => setToggle(!toggle);

  const handleOptionSelect = (value: string) => {
    handleSelect && handleSelect(value);
    setSelected(value);
  };

  const handleClickOutside = () => {
    setToggle(false)
  }
  // TOGGLE FUNCTIONS END

  // REF
  const selRef = useRef<HTMLDivElement>(null);

  // hook to handle when user clicks outside the select
  useOnClickOutside(selRef, handleClickOutside);

  return (
    <div className={styles.select}>
      {/** SELECTED */}
      <div className={styles.selected} ref={selRef} onClick={handleToggle}>
       <div>
       {selected ? selected : "Filter by region"}
       </div>
       <div>
        <FontAwesomeIcon icon={faArrowDown}/>
       </div>
      </div>

      {/** OPTIONS */}
      <div className={toggle ? styles.options : styles["no-display"]}>
        {options.map((o, i) => {
          return (
            <span
              onClick={() => handleOptionSelect(o)}
              className={styles.option}
              key={`${o}_${i}`}
            >
              {o}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSelect;
