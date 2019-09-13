import React from "react";
import styles from "../css/StyledCheckbox.module.scss";

const StyledCheckbox = ({
  option,
  label,
  name,
  id,
  handleCheckbox,
  handleSelection,
  customStyles
}) => {
  return (
    <div
      className={styles.StyledCheckbox}
      onClick={handleSelection}
      style={customStyles}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.StyledCheckbox_checkbox}
        onChange={handleCheckbox}
      />
      <label htmlFor={id} className={styles.StyledCheckbox_label}>
        {label}
      </label>
    </div>
  );
};
export default StyledCheckbox;
