import React from "react";
import styled from "styled-components";

interface ButtonProps {
    text: any
}

export const Button = (props: ButtonProps) => {
    const Button = styled.button`
      display: inline-block;
      border-radius: 2px;
      background-color: #9D0606;
      color: #FFF;
      cursor: pointer;
      transition: .4s;
      text-transform: uppercase;
      border: none;
      padding: 10px 20px;
      font-weight: 600;
      letter-spacing: .6px;
      font-family: Monospaced, sans-serif;

      &:hover {
        background-color: #000;
      }
      @media(min-width: 1600px) {
        padding: 20px 40px;
      }
    `

    return (
        <Button>{props.text}</Button>
    )
}