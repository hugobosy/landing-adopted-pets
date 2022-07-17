import React, {Dispatch, SetStateAction, useState} from "react";
import {BiMenu} from "react-icons/bi";
import styled, {keyframes} from "styled-components";
import {menu} from "../../helpers/menu";

export const Menu = () => {

    const dropDown = keyframes`
      from {
        top: -200px
      }
      to {
        top: 0
      }
    `;
    const dropUp = keyframes`
      from {
        top: 0
      }
      to {
        top: -200px
      }
    `;

    const IconMobile = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9D0606;
      padding: .3rem;
      cursor: pointer;

      @media (min-width: 991px) {
        display: none;
      }
    `;

    const MenuMobile = styled.div`
      position: absolute;
      top: -200px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      background-color: #9D0606;
      transition: .4s;
      &.active {
        animation: ${dropDown} .4s forwards;
      }

      @media (min-width: 991px) {
        display: none;
      }
    `;

    const MenuDesktop = styled.div`
      display: none;
      list-style: none;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      @media (min-width: 991px) {
        display: flex;
      }
    `;

    const MenuItem = styled.a`
      display: inline-block;
      padding: 10px 20px;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      font-size: 1.4rem;
      @media (min-width: 991px) {
        color: #333;
      }
    `;

    const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);

    const menuList = menu.map(item => <li key={item.name}><MenuItem href={item.link}>{item.name}</MenuItem></li>);

    return (
        <>
            <IconMobile onClick={() => setActiveMobileMenu(!activeMobileMenu)}>
                <BiMenu size={30} color='#fff'/>
            </IconMobile>
            <MenuMobile className={activeMobileMenu ? 'active' : undefined}>
                {menuList}
                <Close close={setActiveMobileMenu}/>
            </MenuMobile>
            <MenuDesktop>
                {menuList}
            </MenuDesktop>
        </>
    )
}

interface CloseProps {
    close: Dispatch<SetStateAction<boolean>>
}

const Close = (props: CloseProps) => {
    const Close = styled.div`
      position: absolute;
      top: 1rem;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      &::before,
      &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        background-color: #fff;
      }
      &::before {
        transform: translateX(-50%) rotate(45deg);
      }&::after {
        transform: translateX(-50%) rotate(-45deg);
      }
    `
    return (
        <Close onClick={()=> props.close(false)}/>
    )
}