import styled from "styled-components";
import { Plant as PlantType } from "../Data/Plants"
import { SHADOW } from "../StyleTokens/shadow";
import { BORDER_RADIUS } from "../StyleTokens/borderRadius";
import { COLORS } from "../StyleTokens/colors";

const Card = styled.a`
  display: block;
  width: 600px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOW.SMALL};
  border-radius: ${BORDER_RADIUS.LARGE};
`;

interface Props {
    plant: PlantType;
}

export const Plant = ({ plant }: Props) => {
    return (
        <Card href="#">
            <h2>{plant.name}</h2>
            <div><img src={plant.imageUrl} alt="" /></div>
            <p>
                {plant.description}
            </p>
        </Card>
    );
};
