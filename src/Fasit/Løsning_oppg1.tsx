import React from "react";
import { Plant } from "../Components/Plant";
import { plants } from "../Data/Plants";
import styled from "styled-components";

const Heading = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    text-decoration-style: wave;
`;

const HeadingWithChangingUnderline = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    text-decoration-style: wave;
    &:hover {
        text-decoration: underline;
    }
`;

export const Solution = () => {
    return <Task1 />;
};

const Task1 = () => {
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

const Task2a = () => {
    return (
        <>
            <header>
                <HeadingWithChangingUnderline>
                    Plant World (Solution)
                </HeadingWithChangingUnderline>
            </header>
            {plants.map((plant) => (
                <Plant plant={plant} />
            ))}
        </>
    );
};
