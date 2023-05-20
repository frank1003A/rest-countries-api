import LinkButton from "@/components/Button/LinkButton";
import SimpleGrid from "@/components/Grid/SimpleGrid";
import Flex from "@/components/List/Flex";
import { numberWithCommas } from "@/utils";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LocalData from "../../../../data.json";
import styles from "../../page.module.css";

async function getCountry(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }: { params: { country: string } }) => {
  const country: CountryProps[] = await getCountry(params.country).then(
    (res) => {
      return res;
    }
  );

  const getCountryByCode = (code: string) => {
    let res = "";
    LocalData.filter((country) => {
      if (country.alpha3Code === code) {
        res = country.name;
      }
    });
    return res;
  };

  const createLimitedList = (arr: string[], limit: number) => {
    let newArr = [];
    for (let i = 0; i < limit; i++) {
      newArr.push(arr[i]);
    }
    if (arr.length > limit) {
      return newArr;
    } else {
      return arr
    }
  };

  function renderList(arr: string[]) {
    return arr.map((a, i) => {
      return (
        <LinkButton
          to={`/country/${getCountryByCode(a)}`}
          key={i}
          className={styles["link-btn"]}
        >
          {a}
        </LinkButton>
      );
    });
  }

  const limitRender = (
    arr: string[] | any[],
    limit: number
  ): any[] | string => {
    const createdArr = createLimitedList(arr, limit);
    return renderList(createdArr);
  };

  const getLocalData = (c: CountryProps, key: string) => {
    let res = "";
    LocalData.filter((country) => {
      if (
        key === "currency" &&
        country.name === c.name.common &&
        country.currencies !== undefined
      ) {
        res = country.currencies.map((c) => c.name).join(", ");
      } else if (key === "languages" && country.name === c.name.common ) {
        res = country.languages.map((c) => c.name).join(", ");
      }
    });
    return res;
  };

  return (
    <div className={styles.countries}>
      <Flex>
        <LinkButton to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </LinkButton>
      </Flex>
      <div className={styles["main-content"]}>
        <div>
          <div className={styles.flag}>
            <Image
              src={country[0].flags.svg}
              alt="country_flag"
              fill
              className={styles.cimg}
            />
          </div>
          <div className={styles.description}>
            <h1>{country[0].name.common}</h1>
            <SimpleGrid row={5} column={2} columnGap={10} rowGap={5}>
              <p title={country[0].name.common}>
                Native Name: <span>{country[0].name.common}</span>
              </p>
              <p title={numberWithCommas(country[0].population)}>
                Population: <span>{numberWithCommas(country[0].population)}</span>
              </p>
              <p title={country[0].region}>
                Region: <span>{country[0].region}</span>
              </p>
              <p title={country[0].subregion}>
                Sub Region: <span>{country[0].subregion}</span>
              </p>
              <p title={country[0].capital}>
                Capital: <span>{country[0].capital}</span>
              </p>
              <p title={country[0].tld.join("")}>
                Top Level Domain: <span>{country[0].tld.join("")}</span>
              </p>
              <p title={getLocalData(country[0], "currency")}>
                Currencies: <span>{getLocalData(country[0], "currency")}</span>
              </p>
              <p title={getLocalData(country[0], "languages")}>
                Languages: <span>{getLocalData(country[0], "languages")}</span>
              </p>
            </SimpleGrid>
            {country[0].borders !== undefined && (
              <div className={styles.bc}>
                <p>Border Countries:</p>
                <div className={styles.mc}>
                  {limitRender(country[0].borders, 3)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
