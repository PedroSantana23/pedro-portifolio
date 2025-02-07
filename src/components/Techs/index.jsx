import React from "react";
import styled from "styled-components";
import "@fontsource/fira-code";
import "../../../public/react_icon.svg";
import "../../../public/typescript_icon.svg";
import "../../../public/javascript_icon.svg";
import "../../../public/nodejs_icon.svg";
import "../../../public/python_icon.svg";
import "../../../public/mysql_icon.svg";

const TechsContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`;

const Title = styled.h2`
    font-family: 'Fira Code', monospace;
    font-size: 16px;
`;

const TechsIconContainer = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 30px; // Adiciona um espaço de 20px entre os ícones
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Techs = () => {
    return (
        <TechsContainer>
            <Title>Minha stack de Tecnologias:</Title>
            <TechsIconContainer>
                <Icon src="/react_icon.svg"/>
                <Icon src="/typescript_icon.svg"/>
                <Icon src="/javascript_icon.svg"/>
                <Icon src="/nodejs_icon.svg"/>
                <Icon src="/python_icon.svg"/>
                <Icon src="/mysql_icon.svg"/>
            </TechsIconContainer>
        </TechsContainer>
    );
};

export default Techs;