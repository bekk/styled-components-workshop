import styled from "styled-components";
import { plants } from "../../Data/Plants";
import { Plant } from "./Plant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/**
 * Plants component for task 4a solution
 * */
export const Plants = () => {
    return (
        <Container>
            {plants.map((plant) => (
                <Plant plant={plant} key={plant.id} />
            ))}
        </Container>
    );
};
