import styled from "styled-components";
import { Tag } from "./Tag";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Task5a = () => {
    return (
        <Container>
            <Tag>Bright light</Tag>
            <Tag>Medium</Tag>
            <Tag hidden={true}>This tag should be hidden</Tag>
        </Container>
    );
};
