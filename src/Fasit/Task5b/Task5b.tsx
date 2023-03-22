import styled from "styled-components";
import { Tag } from "./Tag";
import { WaterTag } from "./WaterTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Task5b = () => {
    return (
        <Container>
            <Tag>Bright light</Tag>
            <WaterTag>Medium</WaterTag>
            <Tag hidden={true}>This tag should be hidden</Tag>
        </Container>
    )
}
