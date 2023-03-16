import React from "react";
import "./App.css";
import { Oppgaver } from "./Oppgaver/Oppgaver";
import { Solution} from "./Fasit/Løsning_oppg1";

import styled from "styled-components";

const Container = styled.div`
    // TODO add base styling here
`;

function App() {
    return (
        <div className="App">
            <Solution />
        </div>
    );
}

export default App;
