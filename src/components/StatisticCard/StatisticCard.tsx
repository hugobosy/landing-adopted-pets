import React from "react";
import styled from "styled-components";

interface StatisticProps {
    icon: string
    number: number
    title: string
}

export const StatisticCard = (props: StatisticProps) => {

    const StatisticCard = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
      background-color: #fff;
      width: 100%;
      p {
        font-weight: 700;
        font-size: 2.4rem;
      }
      
      @media(min-width: 1600px) {
        p:nth-child(2) {
          font-size: 4rem;
        }
      }
    `;
    return (
        <StatisticCard>
            <img src={props.icon} alt="Icon"/>
            <p>{props.number}</p>
            <p>{props.title}</p>
        </StatisticCard>
    )
}