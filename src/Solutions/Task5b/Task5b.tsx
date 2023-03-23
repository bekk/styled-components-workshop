import styled from "styled-components";
import { BREAKPOINTS } from "../../StyleTokens/breakpoints";
import { Buttons } from "../Task3/Button";
import { Plants } from "../Task4a/Plants";
import { Tag } from "./Tag";
import { WaterTag } from "./WaterTag";

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

const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 2rem;
`;

export const Task5b = () => {
    return (
        <>
            <header>
                <Heading>Plant World</Heading>
                <p>(Solution for task 5b)</p>
            </header>
            <Container>
                <Tag>Bright light</Tag>
                <WaterTag>Medium</WaterTag>
                <Tag hidden={true}>This tag should be hidden</Tag>
            </Container>
            <Plants />
            <Buttons />
        </>
    );
};
