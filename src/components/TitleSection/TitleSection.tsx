import React from "react";
import styled from "styled-components";

interface TitleProps {
    text: string
}

export const TitleSection = (props: TitleProps) => {
    const TitleSection = styled.h2`
      font-weight: bold;
      font-size: 2.4rem;
      text-transform: capitalize;
      width: 80%;
      letter-spacing: .1rem;
      @media(min-width: 768px) {
        font-size: 3.5rem;
      }
      @media(min-width: 1600px) {
        font-size: 5rem;
      }
    `
    return (
        <TitleSection>
            {props.text}
        </TitleSection>
    )
}