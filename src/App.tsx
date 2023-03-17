import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Oppgaver } from "./Oppgaver/Oppgaver";
import { Solution } from "./Fasit/Solution";
import { COLORS } from "./StyleTokens/colors";

const Container = styled.div`
  background: ${COLORS.GRAY_050};
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
