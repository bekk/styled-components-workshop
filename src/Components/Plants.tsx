import styled from "styled-components";
import { plants } from "../Data/Plants";
import { Plant } from "./Plant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Plants = () => {
    return (
        <Container>
            {
                plants.map(plant => <Plant plant={plant} />)
            }
        </Container>
    )
}
