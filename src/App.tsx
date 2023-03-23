import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Oppgaver } from "./Tasks/Oppgaver";
import { Solution } from "./Solutions/Solution";
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
    const [showSolution, setShowSolution] = useState(false);

    return (
        <Container className="App">
            <ShowSolutionChecxbox>
                <input
                    id="showSolution"
                    type="checkbox"
                    checked={showSolution}
                    onChange={() => setShowSolution((prevState) => !prevState)}
                />
                <label htmlFor="showSolution">Show solution</label>
            </ShowSolutionChecxbox>
            {showSolution ? <Solution /> : <Oppgaver />}
        </Container>
    );
}

export default App;
