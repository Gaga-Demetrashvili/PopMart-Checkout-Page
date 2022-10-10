import React from "react";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <h1>Hello</h1>
      </Main>
    </React.Fragment>
  );
}

export default App;
