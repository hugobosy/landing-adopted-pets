import React from "react";
import styled from "styled-components";

interface LabelProps {
    text: string
}

export const LabelTitleSection = (props: LabelProps) => {
    const Label = styled.h4`
      font-size: 1.6rem;
      text-transform: uppercase;
      color: #9D0606;
      letter-spacing: .3rem;`
    return (
        <Label>{props.text}</Label>
    )
}