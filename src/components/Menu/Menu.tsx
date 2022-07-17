import React from "react";
import {BiMenu} from "react-icons/bi";
import styled from "styled-components";
import {menu} from "../../helpers/menu";

export const Menu = () => {

    const MenuMobile = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9D0606;
      padding: .3rem;
      cursor: pointer;

      @media (min-width: 991px) {
        display: none;
      }
    `

    const MenuDesktop = styled.div`
      display: none;
      list-style: none;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      @media (min-width: 991px) {
        display: flex;
      }
    `

    const MenuItem = styled.a`
      display: inline-block;
      padding: 10px 20px;
      text-transform: uppercase;
      color: #333;
      font-weight: bold;
      font-size: 1.4rem;`

    return (
        <>
            <MenuMobile>
                <BiMenu size={20} color='#fff'/>
            </MenuMobile>
            <MenuDesktop>
                {menu.map(item => <li key={item.name}><MenuItem href={item.link}>{item.name}</MenuItem></li>)}
            </MenuDesktop>
        </>
    )
}