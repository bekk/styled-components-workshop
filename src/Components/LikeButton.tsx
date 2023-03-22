import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: deeppink; // Oppgave 5 skal løses uten å endre denne linja ;)
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "medium" | "large";
}

export const LikeButton = ({ size = "medium", ...rest }: Props ) => {
    const [liked, setLiked] = useState(false)

    const sizeAsPx = size === "large" ? 40 : 32;

    const toggleLiked = () => {
        setLiked(prevState => !prevState)
    }

    return (
        <ButtonContainer {...rest} onClick={toggleLiked}>
            {liked
                ? <IoMdHeart size={sizeAsPx} title="Stop liking" />
                : <IoMdHeartEmpty size={sizeAsPx} title="Likes" />
            }
        </ButtonContainer>
    )
}
