import styled from "styled-components";
import { Buttons } from "../Task3/Button";
import { Plants } from "./Plants";

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-style: wavy;
`;

export const Task4a = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Buttons />
    </>
);
