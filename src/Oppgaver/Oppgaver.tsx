import React from "react";
import { Plant } from "../Components/Plant";
import { plants } from "../Data/Plants";
import styled from "styled-components";


export const Oppgaver = () => {
    return (
        <>
            <header>
                <h1>Plant World</h1>

            </header>
            {
                plants.map(plant => <Plant plant={plant} />)
            }
        </>
    )
}