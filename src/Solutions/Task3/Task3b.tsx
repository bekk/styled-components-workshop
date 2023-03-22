import styled from "styled-components";
import { BREAKPOINTS } from "../../StyleTokens/breakpoints";
import { Plants } from "./Plants";
import { Buttons } from "./Button";

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

export const Task3b = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Buttons /> {/* This component is added in task 3b */}
    </>
);
