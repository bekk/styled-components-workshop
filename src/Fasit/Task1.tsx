import styled from "styled-components";
import { plants } from "../Data/Plants";
import { Plant } from "../Components/Plant";

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-style: wavy;
`;

export const Task1 = () => {
    return (
        <>
            <header>
                <Heading>Plant World (Solution)</Heading>
            </header>
            {plants.map((plant) => (
                <Plant plant={plant} />
            ))}
        </>
    );
};
