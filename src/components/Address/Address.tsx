import React, { useCallback, useEffect, useState, memo } from "react";
import { Button, Input } from "modules";
import { fetchAddress } from "api/fetcher";
import AddressForm from "./AddressForm";
import styles from "./Address.module.scss";

function Address() {
  const [address, setAddress] = useState([]);
  const [value, setValue] = useState<string>("");

  const handleClickButton = useCallback(async () => {
    const response = await fetchAddress(value);
    if (response.suggestions) {
      setAddress(response.suggestions);
    }
  }, [value, setAddress]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length >= 3) {
        setValue(e.target.value);
      }
    },
    [setValue]
  );

  console.log(address);

  return (
    <div className={styles.testing}>
      <div className={styles.container_header}>
        <h1 className={styles.container_header__heading}>Поиск адресов</h1>
        <span className={styles.container_header__description}>
          Введите интересующий вас адрес
        </span>
      </div>
      <div className={styles.container__search}>
        <Input className={styles.input} onChange={handleChange} value={value} />
        <Button onClick={handleClickButton} />
      </div>
      <div>
        {address.length > 0 ? (
          <div>
            <h1 className={styles.address}>Адреса</h1>
          </div>
        ) : null}
      </div>
      <div className={styles.search__result}>
        <div>
          {address.map((item) => (
            <AddressForm key={item.value} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Address);
