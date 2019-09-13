import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Table from "./components/Table";
import { headings, invoices } from "./mockdata/mockdata";

function App() {
  return (
    <div className="App">
      <Main>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "4rem",
            textDecoration: "#5c75ea underline"
          }}
        >
          Complex Data Table for ALA Tracker
        </h1>
        <Table headings={headings} data={invoices} />
      </Main>
    </div>
  );
}

export default App;
