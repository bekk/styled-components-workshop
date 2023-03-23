import styled from "styled-components";
import { Buttons } from "../Task3/Button";
import { Plants } from "../Task4a/Plants";
import { Tag } from "./Tag";

const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 2rem;
`;

export const Task5a = () => {
    return (
        <>
            <header>
                <Heading>Plant World</Heading>
                <p>(Solution for task 5a)</p>
            </header>
            <Container>
                <Tag>Bright light</Tag>
                <Tag>Medium</Tag>
                <Tag hidden={true}>This tag should be hidden</Tag>
            </Container>
            <Plants />
            <Buttons />
        </>
    );
};
