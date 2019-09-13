import React, { useState } from "react";
import styles from "../css/TableHeading.module.scss";

const TableHeading = ({ heading, callback = null }) => {
  const [rotated, setRotated] = useState(null);

  function changeSorting() {
    setRotated(!rotated);

    if (!callback) return;
    return callback();
  }

  return (
    <div className={styles.TableHeading}>
      <div className={styles.TableHeading_inner}>
        {heading ? heading : "No title"}

        <svg
          className={
            rotated
              ? `${styles.TableHeading_inner_chevron} ${styles.rotate_180}`
              : styles.TableHeading_inner_chevron
          }
          onClick={changeSorting}
        >
          <use xlinkHref={`/tables.svg/#icon-chevron-small-down`} />
        </svg>
      </div>
    </div>
  );
};
export default TableHeading;
