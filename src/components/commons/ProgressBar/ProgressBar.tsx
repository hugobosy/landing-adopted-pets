import React, {useState} from "react";
import styled from "styled-components";

interface ProgressProps {
    label: string
    percent: number
}

export const ProgressBar = (props: ProgressProps) => {
    const ProgressBar = styled.div`
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      padding: 1rem 0;
      p {
        font-size: 1.4rem;
        color: #777;
      }
      p:nth-child(1) {
        place-self: flex-start;
      }

      p:nth-child(2) {
        place-self: flex-end;
      }
      div {
        position: relative;
        grid-column: 1/3;
        background-color: #9D0606;
        height: 1.6rem;
        border-radius: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -1px;
          width: calc(${props.percent}% + 1px);
          height: 100%;
          background-color: #FFD200;
          border-radius: 20px;
        }
      }
    `;

    return (
        <ProgressBar>
            <p>{props.label}</p>
            <p>{props.percent}%</p>
            <div></div>
        </ProgressBar>
    )
}