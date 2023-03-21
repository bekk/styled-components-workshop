import styled from "styled-components";
import { COLORS } from "../StyleTokens/colors";
import { VARIANT } from "../StyleTokens/variants";

const Button = styled.button<{ variant: VARIANT }>`
    /* Adapt the colors based on primary prop */
    background: ${(props) =>
        props.variant === VARIANT.PRIMARY ? COLORS.BLUE_500 : COLORS.WHITE};
    color: ${(props) =>
        props.variant === VARIANT.PRIMARY ? COLORS.BLUE_900 : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const Buttons = () => {
    return (
        <div>
            <Button variant={VARIANT.SECONDARY}>Secondary</Button>
            <Button variant={VARIANT.PRIMARY}>Primary</Button>
        </div>
    );
};
