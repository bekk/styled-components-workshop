import styled from "styled-components";
import { plants } from "../../Data/Plants";
import { COLORS } from "../../StyleTokens/colors";
import { Plant } from "./Plant";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Plants = () => {
    return (
        <Container>
            {plants.map((plant) => (
                <Plant
                    plant={plant}
                    key={plant.id}
                    backgroundColor={getMixedColor(plant.id)}
                />
            ))}
        </Container>
    );
};

function getMixedColor(id: number): COLORS {
    if (id % 2 === 0) {
        return COLORS.GRAY_400;
    } else {
        return COLORS.LIME_200;
    }
}
