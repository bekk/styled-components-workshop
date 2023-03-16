import React from "react";
import { Plant } from "../Components/Plant";
import { plants } from "../Data/Plants";
import styled from "styled-components";


export const Solution = () => {
    return (
        <>
            <header>
                <h1>Plant World (Solution)</h1>
            </header>
            {
                plants.map(plant => <Plant plant={plant} />)
            }
        </>
    )
}