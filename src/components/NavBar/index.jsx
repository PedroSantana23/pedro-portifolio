import styled from "styled-components";
import React from "react";
import "@fontsource/fira-code";
import "../../../public/github.svg";
import "../../../public/linkedin.svg";
import "../../../public/whatsapp.svg";
import "../../../public/code.svg";

const NavBarContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #d6c6bb;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  color: #000000;
  font-family: "Fira Code", monospace;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 100px; 
`;

const Button = styled.button`
  width: 120px;
  height: 45px;
  background: linear-gradient(to right, #000000 50%, #d6c6bb 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #000000;
  cursor: pointer;
  font-size: 18px;
  border: 1.5px solid #000000;
  transition: background-position 0.5s ease, color 0.3s ease;

  &:hover {
    background-position: left bottom;
    color: #ffffff;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 25px; 
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconLink = styled.a`
  text-decoration: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  font-size: 10px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <TitleWrapper>
        <Icon src="/code.svg" alt="Code Icon" />
        <h1>pedro_henrique</h1>
      </TitleWrapper>
      <ButtonContainer>
        <Button>Projetos</Button>
        <Button>Trajetória</Button>
        <Button>Contate-me</Button>
      </ButtonContainer>
      <IconWrapper>
        <IconLink href="https://github.com/PedroSantana23">
          <Icon src="/github.svg" alt="GitHub" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/pedro-henrique-da-silva-de-santana-171a712b3/">
          <Icon src="/linkedin.svg" alt="LinkedIn" />
        </IconLink>
        <IconLink>
          <Icon src="/whatsapp.svg" alt="WhatsApp" />
        </IconLink>
      </IconWrapper>
    </NavBarContainer>
  );
};

export default NavBar;