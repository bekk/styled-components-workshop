import styled from "styled-components";
import { Plants } from "../Components/Plants";

const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task1 = () => {
    return (
        <>
            <header>
                <Heading>Plant World</Heading>
                <span>(Solution for task 1)</span>
            </header>
            <Plants />
        </>
    );
};
