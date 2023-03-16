import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Oppgaver } from "./Oppgaver/Oppgaver";
import { Solution } from "./Fasit/Solution";

const Container = styled.div`
    // TODO add base styling here
`;

function App() {
    const [showSolution, setShowSolution] = useState(true); // TODO bytt denne til false før workshop

    return (
        <Container className="App">
            <input
                id="showSolution"
                type="checkbox"
                checked={showSolution}
                onChange={() => setShowSolution((prevState) => !prevState)}
            />
            <label htmlFor="showSolution">Vis fasit</label>
            {showSolution ? <Solution /> : <Oppgaver />}
            Stashed changes
        </Container>
    );
}

export default App;
