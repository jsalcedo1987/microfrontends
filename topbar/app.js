import React from "react";
import styles from "./styles.css";

const App = props =>
  <div className={styles.special}>
      {props.name}
  </div>;

export default App;
