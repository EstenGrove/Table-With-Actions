import React from "react";
import styles from "../css/TableRow.module.scss";
import StyledCheckbox from "./StyledCheckbox";

const TableRow = ({ data }) => {
  return (
    <div className={styles.TableRow}>
      <div className={styles.TableRow_inner}>
        <div className={styles.TableRow_inner_selection}>
          <StyledCheckbox name={data.id} id={data.id} label="Select" />
        </div>
        <div className={styles.TableRow_inner_data}>
          <div className={styles.TableRow_inner_data_item}>{data.client}</div>
          <div className={styles.TableRow_inner_data_item}>{data.issued}</div>
          <div className={styles.TableRow_inner_data_item}>{data.due}</div>
          <div className={styles.TableRow_inner_data_item}>{data.amount}</div>
          <div className={styles.TableRow_inner_data_item}>
            <div className={styles.TableRow_inner_item_status}>
              {data.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableRow;
