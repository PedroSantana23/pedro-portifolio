import React from "react";
import styled from "styled-components";
import "@fontsource/fira-code";

const WorksContainer = styled.div`
  width: 1700px;
  height: auto;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start; // Alinha os itens à esquerda
  flex-direction: column;
  padding-left: 20px; // Adiciona um padding à esquerda para o TitleContainer
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
`;

const TitleContainer = styled.div`
  width: auto;
  height: 45px;
  background-color: #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code", monospace;
  border-radius: 15px 0 15px 0;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #ffffff;
  margin: 10px;
`;

const Description = styled.div`
  width: 100%;
  font-family: "Fira Code", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; // Adiciona um espaço entre o TitleContainer e o WhatIDo
  padding: 0 20px; // Adiciona um padding para evitar que o texto encoste nas bordas
`;

const SquaresContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const BlueSquare = styled.div`
  width: 400px;
  height: 400px;
  background-color: #5384ee;
  border: 2.5px solid #000000;
  color: #ffffff;
`;

const CyanSquare = styled.div`
  width: 400px;
  height: 400px;
  background-color: #53b3ee;
  border: 2.5px solid #000000;
  color: #ffffff;
`;

const PurpleSquare = styled.div`
  width: 400px;
  height: 400px;
  background-color: #6b53ee;
  border: 2.5px solid #000000;
  color: #ffffff;
`;

const Works = () => {
  return (
    <WorksContainer>
      <TitleContainer>
        <Title>O que eu faço?</Title>
      </TitleContainer>
      <Description>
        <p>
          Desenvolvo soluções tecnológicas voltadas para a área de web, focando
          em performance, escalabilidade, usabilidade e design responsivo. Tenho
          experiência em criar aplicações escaláveis, integrando front-end
          moderno e back-end robusto.
        </p>
      </Description>
      <SquaresContainer>
        <BlueSquare></BlueSquare>
        <CyanSquare></CyanSquare>
        <PurpleSquare></PurpleSquare>
      </SquaresContainer>
      <TitleContainer>
        <Title>Projetos</Title>
      </TitleContainer>
      <Description>
        <p>Confira alguns projetos que eu desenvolvi:</p>
      </Description>
    </WorksContainer>
  );
};

export default Works;
