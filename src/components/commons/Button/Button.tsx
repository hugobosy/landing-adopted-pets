import React from "react";
import styled from "styled-components";

interface ButtonProps {
    text: string
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
      }`

    return (
        <Button>{props.text}</Button>
    )
}