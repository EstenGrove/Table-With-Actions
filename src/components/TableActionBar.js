import React, { useState } from "react";
import styles from "../css/TableActionBar.module.scss";
import sprite from "../assets/tables.svg";
import { download, fetchADLs, base } from "../utils/endpoints";
import { useFetch } from "../utils/useFetch";
import { useClipboard } from "../utils/useClipboard";

const TableActionBar = ({ activeUser, tableData }) => {
  const [activeAction, setActiveAction] = useState(null);
  const [openActions, toggleOpenActions] = useState(false);
  const { data, makeRequest } = useFetch();
  const { copied, copyToClipboard } = useClipboard();

  function handleActions(action) {
    setActiveAction(action);
    return toggleOpenActions(!openActions);
  }

  function handlePrint() {
    return window.print();
  }

  function tableActionsReducer(action) {
    switch (action.type) {
      case "PRINT":
        return window.print();
      case "SAVE":
        return fetch("http://localhost:3000/dummy.pdf")
          .then(data => data.json())
          .then(resp => console.log(resp))
          .catch(err => console.log(err));

      case "REFRESH":
        const { data } = makeRequest(
          base + fetchADLs,
          activeUser.token,
          "GET",
          {
            "db-meta": "Advantage",
            ResidentID: 2737
          }
        );
        return data;
      case "COPY_ALL":
        return;
      case "COPY_SINGLE":
        return;
      case "SELECT_ALL":
        return;
      default:
        return new Error("Sorry, there was an error");
    }
  }

  return (
    <div className={styles.TableActionBar}>
      <div
        className={
          openActions
            ? `${styles.TableActionBar_inner} ${styles.openActionBar}`
            : styles.TableActionBar_inner
        }
      >
        <svg
          className={styles.TableActionBar_inner_icon}
          onClick={handleActions}
        >
          <use xlinkHref={`${sprite}#icon-chevron-with-circle-down`} />
        </svg>
        <svg className={styles.TableActionBar_inner_icon}>
          <use xlinkHref={`${sprite}#icon-cw`} />
        </svg>
        <svg className={styles.TableActionBar_inner_icon}>
          <use xlinkHref={`${sprite}#icon-clipboard1`} />
        </svg>

        <svg
          className={styles.TableActionBar_inner_icon}
          onClick={() => tableActionsReducer("SAVE")}
        >
          <use xlinkHref={`${sprite}#icon-save`} />
        </svg>
        <svg className={styles.TableActionBar_inner_icon} onClick={handlePrint}>
          <use xlinkHref={`${sprite}#icon-print`} />
        </svg>
        <svg className={styles.TableActionBar_inner_icon}>
          <use xlinkHref={`${sprite}#icon-cog`} />
        </svg>
        <svg className={styles.TableActionBar_inner_icon}>
          <use xlinkHref={`${sprite}#icon-dots-three-horizontal`} />
        </svg>
      </div>
      <div
        className={
          openActions
            ? `${styles.TableActionBar_search} ${styles.showHidden}`
            : styles.TableActionBar_search
        }
      >
        <input
          type="text"
          name="filter_table"
          id="filter_table"
          className={styles.TableActionBar_search_hidden}
          placeholder="Filter..."
        />
        <svg
          className={styles.TableActionBar_search_hidden_icon}
          role="button"
          tabIndex={0}
        >
          <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
        </svg>
      </div>
    </div>
  );
};
export default TableActionBar;
