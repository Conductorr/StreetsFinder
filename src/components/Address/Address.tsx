import React, { useCallback, useEffect, useState } from "react";
import styles from "./Address.module.scss";
import useSwr from "swr";
import { Button, Input } from "modules";
import { fetchAddress } from "api/fetch";
import button from "../../modules/Button";
import AddressForm from "./AddressForm";

function Address() {
  const [address, setAddress] = useState([]);
  const [value, setValue] = useState("");

  const query = "ленина";

  // const click = async () => {
  //   const response = await fetch(
  //     "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({ query: query }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         Accept: "application/json",
  //         Authorization: "Token " + "673337e7ab9699431aeec125e0e9dea23b7e8175",
  //       },
  //     }
  //   );
  //
  //   setAddress(result);
  // };

  const handleClickButton = useCallback(async () => {
    const response = await fetchAddress();
    return setAddress([...response]);
  }, []);

  console.log(address);

  return (
    <div style={styles.container}>
      <div className={styles.container_header}>
        <h1 className={styles.container_header__heading}>Поиск Адрессов</h1>
        <span className={styles.container_header__description}>
          Введите интересующий вас адрес
        </span>
      </div>
      <div className={styles.container__search}>
        <Input value={value} />
        <Button onClick={handleClickButton} />
      </div>
      <div>
        {address.map((item) => (
          <AddressForm key={item.value} value={item.value} />
        ))}
      </div>
    </div>
  );
}

export default Address;
