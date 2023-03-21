import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: red;
`;

export const LikeButton = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const [liked, setLiked] = useState(false)

    return (
        <ButtonContainer {...rest} onClick={() => setLiked(prevState => !prevState)}>
            {liked
                ? <IoMdHeart size={40} />
                : <IoMdHeartEmpty size={40}  />
            }
        </ButtonContainer>
    )
}
