import React from "react";
import styles from "../css/Table.module.scss";
import TableHeading from "./TableHeading";
import StyledCheckbox from "./StyledCheckbox";
import TableActionBar from "./TableActionBar";
import TableRow from "./TableRow";
import TableSettingsMenu from "./TableSettingsMenu";

const Table = ({ headings, data }) => {
  return (
    <>
      <div className={styles.Table}>
        <div className={styles.Table_headings}>
          <div className={styles.Table_headings_selector}>
            <div className={styles.TableHeadings_selector_item}>
              <StyledCheckbox
                name="selection"
                id="selection"
                label="SELECT"
                customStyles={{ marginBottom: "2rem" }}
              />
            </div>
          </div>
          {headings &&
            headings.map((heading, index) => (
              <TableHeading heading={heading} key={heading} />
            ))}
        </div>
        <TableActionBar tableData={data} />

        <div className={styles.Table_rows}>
          {data &&
            data.map((entry, index) => (
              <TableRow data={entry} key={entry.id} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Table;
