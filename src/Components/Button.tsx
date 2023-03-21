import styled, { ThemeProvider } from "styled-components";
const Button = styled.button`
    color: ${(props) => props.theme.fg};
    border: 2px solid ${(props) => props.theme.fg};
    background: ${(props) => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
    fg: "palevioletred",
    bg: "white",
};

interface Props {
    buttonText: string;
}
export const ThemeButton = ({ buttonText }: Props) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button>{buttonText}</Button>
            </ThemeProvider>
        </div>
    );
};
