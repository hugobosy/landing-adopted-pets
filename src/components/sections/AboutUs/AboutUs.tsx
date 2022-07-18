import React from "react";
import {Container} from "../../styles";
import styled from "styled-components";
import {LabelTitleSection} from "../../LabelTitleSection/LabelTitleSection";
import {TitleSection} from "../../TitleSection/TitleSection";
import {DescSection} from "../../DescSection/DescSection";
import {ProgressBar} from "../../commons/ProgressBar/ProgressBar";

export const AboutUs = () => {
    const AboutUs = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;

      img {
        width: 100%;
      }

      div:nth-child(2) {
        align-self: flex-start;
      }`
    return (
        <Container>
            <AboutUs>
                <div>
                    <img
                        src="https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-about.jpg"
                        alt="Kici"/>
                </div>
                <div>
                    <LabelTitleSection text='about us'/>
                    <TitleSection text="what makes us care about pets?"/>
                    <DescSection
                        text='If it wasn’t for our founder’s childhood spent on a ranch in northern Texas, surrounded by domestic animals and pets all the time till she went to college – there might have been no Anilove animal shelter now. So as soon as she graduated with her Veterinary degree 12 years ago, she already knew what she will be doing for a living.'
                    />
                    <ProgressBar label="Animal care" percent={90}/>
                    <ProgressBar label="Pet boarding" percent={80}/>
                    <ProgressBar label="Lost and found pets" percent={75}/>
                </div>
            </AboutUs>
        </Container>
    )
}