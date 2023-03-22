import styled from "styled-components";
import { BREAKPOINTS } from "../../StyleTokens/breakpoints";
import { Plants } from "./Plants";

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

export const Task3a = () => {
    return (
        <>
            <header>
                <Heading>Plant World (Solution)</Heading>
            </header>
            <Plants />
        </>
    );
};
