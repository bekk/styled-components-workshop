import styled from "styled-components";
import { ThemeButtons6b } from "./ThemeButtons6b";
import { Plants } from "../../Components/Plants";

const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task6b = () => (
    <>
        <header>
            <Heading>Plant World</Heading>
            <p>(Solution for task 6b)</p>
        </header>
        <Plants />
        <ThemeButtons6b buttonText={"Show More"} />
    </>
);
