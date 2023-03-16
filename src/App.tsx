import React from "react";
import "./App.css";
import { Oppgaver } from "./Oppgaver";
import styled from "styled-components";

const Container = styled.div`
  // TODO add base styling here

`;

function App() {
    return (
        <div className="App">
            <Oppgaver />
        </div>
    );
}

export default App;
