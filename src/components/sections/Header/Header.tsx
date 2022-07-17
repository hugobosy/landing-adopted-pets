import React from "react";
import styled from "styled-components";
import {Container} from "../../styles";
import {Menu} from "../../Menu/Menu";

export const Header = () => {
    const Header = styled.header`
      width: 100%;
      padding: 10px;
    `
    const Header__content = styled.div`
      display: flex;
      justify-content: space-between;
    `
    const Header__left = styled.div`
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
    `
    const Header__right = styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
      margin-right: 2rem;
    `

    return (
        <Header>
            <Container>
                <Header__content>
                    <Header__left>
                        <img
                            src="https://template78901.motopreview.com/mt-demo/78900/78901/mt-content/uploads/2019/03/mt-1774-home-logo.png"
                            alt="Logo"/>
                        <div>
                            <h4>Shelter</h4>
                            <p>Help Animal</p>
                        </div>
                    </Header__left>
                    <Header__right>
                        <Menu/>
                    </Header__right>
                </Header__content>
            </Container>
        </Header>
    )
}