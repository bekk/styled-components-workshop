import styled from "styled-components";
import { plants } from "../Data/Plants";
import { BORDER_RADIUS } from "../StyleTokens/borderRadius";
import { COLORS } from "../StyleTokens/colors";
import { SHADOW } from "../StyleTokens/shadow";
import { Plant as PlantType } from "../Data/Plants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Card = styled.a<{ backgroundColor: COLORS }>`
    flex: 1 10rem;
    max-width: 50rem;
    background: ${(props) => props.backgroundColor};
    box-shadow: ${SHADOW.SMALL};
    border-radius: ${BORDER_RADIUS.XLARGE};
    padding: 32px;
`;

interface Props {
    plant: PlantType;
    backgroundColor?: COLORS;
}

export const Plant = ({ plant, backgroundColor = COLORS.WHITE }: Props) => {
    return (
        <Card href={`#${plant.name}`} backgroundColor={backgroundColor}>
            <h2>{plant.name}</h2>
            <div>
                <img src={plant.imageUrl} alt="" />
            </div>
            <p>{plant.description}</p>
        </Card>
    );
};
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
