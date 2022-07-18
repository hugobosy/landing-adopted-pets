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
    `
    return (
        <TitleSection>
            {props.text}
        </TitleSection>
    )
}