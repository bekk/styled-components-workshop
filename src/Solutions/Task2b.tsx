import styled from "styled-components";
import { Plants } from "../Components/Plants";
import { BREAKPOINTS } from "../StyleTokens/breakpoints";

const Heading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;

    &:hover {
        text-decoration: underline;
    }

    @media (min-width: ${BREAKPOINTS.TABLET}) {
        font-size: 3rem;
    }
`;

export const Task2b = () => {
    return (
        <>
            <header>
                <Heading>Plant World</Heading>
                <span>(Solution for task 2b)</span>
            </header>
            <Plants />
        </>
    );
};
