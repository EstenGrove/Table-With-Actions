import React from "react";
import styles from "../css/TableSettingsMenu.module.scss";

const TableSettingsMenu = props => {
  return (
    <nav className={styles.TableSettingsMenu}>
      <div className={styles.TableSettingsMenu_inner}>
        <div className={styles.TableSettingsMenu_inner_item}>
          <input
            type="text"
            name="loadResFromSettings"
            id="loadResFromSettings"
            className={styles.TableSettingsMenu_inner_item_input}
            placeholder="Find a resident..."
          />
        </div>
      </div>
    </nav>
  );
};
export default TableSettingsMenu;
