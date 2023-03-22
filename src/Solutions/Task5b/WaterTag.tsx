import { ReactNode } from "react";
import styled from "styled-components";
import { Tag } from "./Tag";
import { COLORS } from "../../StyleTokens/colors";

const BlueTag = styled(Tag)`
    background: ${COLORS.BLUE_100};
    border-color: ${COLORS.BLUE_600};
`;

interface Props {
    hidden?: boolean;
    children: ReactNode;
}

export const WaterTag = ({ hidden, children }: Props) => {
    return <BlueTag hidden={hidden}>Water: {children}</BlueTag>;
};
