import styled from "styled-components";

import { Buttons } from "./Button";
import { COLORS } from "../../StyleTokens/colors";
import { SHADOW } from "../../StyleTokens/shadow";
import { BORDER_RADIUS } from "../../StyleTokens/borderRadius";
import { LikeButton } from "../../Components/LikeButton";
import { plants, Plant as PlantType } from "../../Data/Plants";

const Heading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: wavy;
`;

export const Task4a = () => (
    <>
        <header>
            <Heading>Plant World (Solution)</Heading>
        </header>
        <Plants />
        <Buttons />
    </>
);

/* Plants.tsx */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Plants = () => {
    return (
        <Container>
            {plants.map((plant) => (
                <Plant plant={plant} key={plant.id} />
            ))}
        </Container>
    );
};

/* Plant.tsx */
const Card = styled.a`
    flex: 1 10rem;
    max-width: 50rem;
    background: ${COLORS.WHITE};
    box-shadow: ${SHADOW.SMALL};
    border-radius: ${BORDER_RADIUS.XLARGE};
    padding: 32px;
`;

/* Add new code here: */
const PlantLikeButton = styled(LikeButton)`
    color: ${COLORS.LIME_600};
`;

interface Props {
    plant: PlantType;
    backgroundColor?: COLORS;
}

const Plant = ({ plant, backgroundColor = COLORS.WHITE }: Props) => {
    return (
        <Card href={`#${plant.name}`}>
            <h2>{plant.name}</h2>
            <div>
                <img src={plant.imageUrl} alt="" />
            </div>
            <PlantLikeButton />
            <p>{plant.description}</p>
        </Card>
    );
};
