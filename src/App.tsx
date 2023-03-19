import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Oppgaver } from "./Oppgaver/Oppgaver";
import { Solution } from "./Fasit/Solution";
import { COLORS } from "./StyleTokens/colors";

const Container = styled.div`
    background: ${COLORS.GRAY_050};
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.5rem;
`;

const ShowSolutionChecxbox = styled.div`
    align-self: end;
`;

function App() {
    const [showSolution, setShowSolution] = useState(true); // TODO bytt denne til false før workshop

    return (
        <Container className="App">
            <ShowSolutionChecxbox>
                <input
                    id="showSolution"
                    type="checkbox"
                    checked={showSolution}
                    onChange={() => setShowSolution((prevState) => !prevState)}
                />
                <label htmlFor="showSolution">Vis fasit</label>
            </ShowSolutionChecxbox>
            {showSolution ? <Solution /> : <Oppgaver />}
        </Container>
    );
}

export default App;
