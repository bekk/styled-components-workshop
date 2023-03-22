import styled from "styled-components";
import { Plant as PlantType } from "../Data/Plants";
import { SHADOW } from "../StyleTokens/shadow";
import { BORDER_RADIUS } from "../StyleTokens/borderRadius";
import { COLORS } from "../StyleTokens/colors";
import { LikeButton } from "./LikeButton";

const Card = styled.a`
    flex: 1 10rem;
    max-width: 50rem;
    background: ${COLORS.WHITE};
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
        <Card href={`#${plant.name}`}>
            <h2>{plant.name}</h2>
            <div>
                <img src={plant.imageUrl} alt="" />
            </div>
            <LikeButton size="large" />
            <p>{plant.description}</p>
        </Card>
    );
};
