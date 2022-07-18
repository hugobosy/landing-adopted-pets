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
      line-height: 1.6;
      @media(min-width: 768px) {
        font-size: 1.6rem;
        line-height: 1.4;
      }
      @media(min-width: 1600px) {
        font-size: 2rem;
        line-height: 1.8;
      }
    `
    return (
        <Paragraph>
            {props.text}
        </Paragraph>
    )
}