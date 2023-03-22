import styled from "styled-components";

import { Buttons } from "./Button";
import { Plants } from "./Plants";
const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task3b = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Buttons />
    </>
);
