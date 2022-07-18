import React from "react";
import styled from "styled-components";

interface DescProps {
    text: string
}

export const DescSection = (props: DescProps) => {
    const Paragraph = styled.p`
      padding: 2rem 0;
      font-size: 1.4rem;
      color: #bbb;
      letter-spacing: .1rem;
    `
    return (
        <Paragraph>
            {props.text}
        </Paragraph>
    )
}