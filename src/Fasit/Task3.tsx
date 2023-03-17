import styled from "styled-components";
import { Plant as PlantType } from "../Data/Plants";
import { SHADOW } from "../StyleTokens/shadow";
import { BORDER_RADIUS } from "../StyleTokens/borderRadius";
import { COLORS } from "../StyleTokens/colors";

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


