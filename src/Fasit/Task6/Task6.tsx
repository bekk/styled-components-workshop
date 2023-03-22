import styled from "styled-components";
import { ThemeButtons } from "./ThemeButtons";
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
        <ThemeButtons buttonText={"Show More"} />
    </>
);
