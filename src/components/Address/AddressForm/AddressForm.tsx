import React from "react";
import styles from "./AddressForm.module.scss";
import address from "../Address";

type Props = {
  value: string;
};

function AddressForm({ value }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}></div>
      <div className={styles.container_content}>
        <h1 className={styles.container_content__heading}>{value}</h1>
      </div>
    </div>
  );
}

export default AddressForm;
