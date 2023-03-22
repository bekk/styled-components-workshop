import styled from "styled-components";
import { ReactNode } from "react";
import { COLORS } from "../../StyleTokens/colors";
import { BORDER_RADIUS } from "../../StyleTokens/borderRadius";

const Container = styled.span`
    background: ${COLORS.LIME_100};
    border: 1px solid ${COLORS.LIME_600};
    color: black;

    padding: 0.125rem 0.75rem;
    border-radius: ${BORDER_RADIUS.SMALL};
    width: fit-content;
`;

interface Props {
    hidden?: boolean;
    children?: ReactNode;
}

/**
 * Tag component for task 5a solution
 * */
export const Tag = ({ hidden = false, children }: Props) => {
    if (hidden) {
        return null;
    }

    return <Container>{children}</Container>;
};
