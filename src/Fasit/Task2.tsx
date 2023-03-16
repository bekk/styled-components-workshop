import styled from "styled-components";
import { plants } from "../Data/Plants";
import { Plant } from "../Components/Plant";

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Task2a = () => {
    return (
        <>
            <header>
                <Heading>
                    Plant World (Solution)
                </Heading>
            </header>
            {plants.map((plant) => (
                <Plant plant={plant} />
            ))}
        </>
    );
};
