import styles from "@/app/page.module.css";
import { numberWithCommas } from "@/utils";
import { faArrowsToCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MotionProps, motion } from "framer-motion";
import Image from "next/image";

interface Props extends MotionProps {
  country: CountryProps;
  onNavigate: () => void;
}

const Country = ({ country, onNavigate, ...rest }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}
      className={styles["country-card"]}
      {...rest}
    >
      <motion.button animate={{ x: 1 }} className={styles["icon-btn"]} onClick={onNavigate}>
        <FontAwesomeIcon icon={faArrowsToCircle} />
      </motion.button>
      <div className={styles.flag}>
        {
          <Image
            src={country.flags.png}
            alt="country-flag"
            width={200}
            height={120}
            className={styles["next-img"]}
          />
        }
      </div>
      <div className={styles.btm}>
        <h4 title={country.name.common}>{country.name.common}</h4>
        <p>
          Population: <span>{numberWithCommas(country.population)}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Country;
