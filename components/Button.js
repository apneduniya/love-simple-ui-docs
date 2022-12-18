import React from "react";
import styles from "./button.module.css";

function Button() {
  return (
    <button
      class={styles.btn}
      role="button"
      onClick={() => {
        alert("Button Clicked");
      }}
    >
      Submit
    </button>
  );
}

export default Button;
