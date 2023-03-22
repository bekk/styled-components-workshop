import styled from "styled-components";

import { ThemeButton as Buttons } from "./ThemeButton2";
import { Plants } from "./Plants";
const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task6b = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Buttons buttonText={"Show More"} />
    </>
);
