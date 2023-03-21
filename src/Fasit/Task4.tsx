import styled from "styled-components";

import { ThemeButton } from "../Components/ThemeButton";
import { PlantsWithBackgoundColor } from "./PlantsWithBackgoundColor";
const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task4 = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <PlantsWithBackgoundColor />
        <ThemeButton buttonText={"Show More"} />
    </>
);
