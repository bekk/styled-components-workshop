import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: deeppink; // Oppgave 5 skal løses uten å endre denne linja ;)
`;

export const LikeButton = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const [liked, setLiked] = useState(false)

    return (
        <ButtonContainer {...rest} onClick={() => setLiked(prevState => !prevState)}>
            {liked
                ? <IoMdHeart size={40} title="Stop liking" />
                : <IoMdHeartEmpty size={40} title="Likes" />
            }
        </ButtonContainer>
    )
}
