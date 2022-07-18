import React from "react";
import styled from "styled-components";
import {Container} from "../../styles";
import {Menu} from "../../Menu/Menu";
import {Button} from "../../commons/Button/Button";

export const Header = () => {
    const Header = styled.header`
      width: 100%;
    `;
    const HeaderContent = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 10px;
    `;
    const HeaderLeft = styled.div`
      display: flex;
      justify-content: space-around;
      align-items: center;
      column-gap: 2rem;

      h4 {
        color: #000;
        font-size: 3rem;
      }

      p {
        color: #999;
        font-size: 1.7rem;
        letter-spacing: .5px;
      }
    `;
    const HeaderRight = styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
      margin-right: 2rem;
    `;

    const HeaderHero = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      width: 100%;
      padding: 30px 0;
      height: 40rem;
      background-image: url("https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-header-bg.jpg");
      background-size: cover;
      background-position: 60% 0;
      color: #fff;

      div {
        width: 100%;
        padding: 0 10px;
      }

      div:nth-child(2) {
        border-left: 2px solid #fff;
        margin: 15px 10px;
      }

      h4 {
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      h2 {
        font-size: 3rem;
        font-weight: bold;
      }

      p {
        width: 50%;
        font-size: 1.6rem;
        padding: 10px 20px;
      }

      @media (min-width: 768px) {
        height: 50rem;
        h4 {
          font-size: 3rem;
        }

        h2 {
          font-size: 5rem;
        }

        p {
          font-size: 2rem;
        }
      }

      @media (min-width: 1600px) {
        height: 80rem;
        h4 {
          padding: 20px 0;
          letter-spacing: .5rem;
        }

        h2 {
          font-size: 12rem;
        }

        p {
          font-size: 3rem;
        }

        div:last-child {
          padding: 30px 10px;
        }
      }
    `;

    return (
        <Header>
            <Container>
                <HeaderContent>
                    <HeaderLeft>
                        <img
                            src="https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-logo.png"
                            alt="Logo"/>
                        <div>
                            <h4>Shelter</h4>
                            <p>Help Animal</p>
                        </div>
                    </HeaderLeft>
                    <HeaderRight>
                        <Menu/>
                    </HeaderRight>
                </HeaderContent>
            </Container>
            <HeaderHero>
                <Container>
                    <div>
                        <h4>Animals need</h4>
                        <h2>Your Help!</h2>
                    </div>
                    <div>
                        <p>You can chip in with money & effort! Cats, Dogs and Even Raccoons Adopt Any Pet You Like!</p>
                    </div>

                    <div>
                        <Button text="donate now!"/>
                    </div>
                </Container>
            </HeaderHero>
        </Header>
    )
}