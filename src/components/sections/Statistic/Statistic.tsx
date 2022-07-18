import React from "react";
import styled from "styled-components";
import {StatisticCard} from "../../StatisticCard/StatisticCard";
import {Container} from "../../styles";

export const Statistic = () => {
    const Statistic = styled.section`
      width: 100%;
      padding: 10rem 1rem;
      background-image: url("https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-circle1.png");
      background-size: cover;
      background-color: #eee;
    `;

    const StatisticCardWrap = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
      grid-gap: 5rem;
      justify-content: center;
    `
    return (
        <Statistic>
            <Container>
                <StatisticCardWrap>
                    <StatisticCard
                        icon='https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-icon1.png'
                        number={585} title='Pets'/>
                    <StatisticCard
                        icon='https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-icon2.png'
                        number={20} title='Awards'/>
                    <StatisticCard
                        icon='https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-icon3.png'
                        number={100} title='Staffers'/>
                </StatisticCardWrap>
            </Container>
        </Statistic>
    )
}