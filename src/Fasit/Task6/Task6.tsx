import styled from "styled-components";

import { ThemeButton as Button } from "./ThemeButton";
import { Plants } from "./Plants";
const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task6 = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Button buttonText={"Show More"} />
    </>
);
