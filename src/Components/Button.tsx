import styled from "styled-components";

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: "white";
    color:   "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const Buttons = () => {
    return (
        <div>
            <Button>Secondary</Button>
            <Button>Primary</Button>
        </div>
    );
};
