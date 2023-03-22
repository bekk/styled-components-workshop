import styled, { ThemeProvider } from "styled-components";
import { COLORS } from "../../StyleTokens/colors";
const Button = styled.button`
    color: ${(props) => props.theme.color};
    border: 2px solid ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

const theme = {
    color: COLORS.BLUE_500,
    background: "white",
};

Button.defaultProps = {
    theme: {
        color: "palevioletred",
    },
};

interface Props {
    buttonText: string;
}
export const ThemeButton = ({ buttonText }: Props) => {
    return (
        <div>
            <Button>Default knapp</Button>
            <ThemeProvider theme={theme}>
                <Button>{buttonText}</Button>
                <Button>{buttonText}</Button>
            </ThemeProvider>
        </div>
    );
};
