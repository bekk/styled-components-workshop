import styled from "styled-components";
import { COLORS } from "../../StyleTokens/colors";
import { SHADOW } from "../../StyleTokens/shadow";
import { BORDER_RADIUS } from "../../StyleTokens/borderRadius";
import { Plant as PlantType } from "../../Data/Plants";
import { LikeButton } from "../../Components/LikeButton";

const Card = styled.div<{ backgroundColor: COLORS }>`
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

/**
 * Plant component for task 3a solution
 * */
export const Plant = ({ plant, backgroundColor = COLORS.WHITE }: Props) => {
    return (
        <Card backgroundColor={backgroundColor}>
            <h2>{plant.name}</h2>
            <div>
                <img src={plant.imageUrl} alt="" />
            </div>
            <LikeButton size="large" />
            <p>{plant.description}</p>
        </Card>
    );
};
