import React from "react";
import styled from "styled-components";
import "@fontsource/fira-code";

const WorksContainer = styled.div`
  width: 100%;
  max-width: 1700px; // Limita a largura máxima
  height: auto;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px; // Adiciona padding geral
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
  margin: auto; // Centraliza o conteúdo
`;

const TitleContainer = styled.div`
  width: 100%;
  max-width: 250px; // Limita a largura máxima
  height: 45px;
  background-color: #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code", monospace;
  border-radius: 15px 0 15px 0;
  margin-top: 20px
`;

const Title = styled.h2`
  color: #ffffff;
  margin: 10px;
`;

const Description = styled.div`
  width: 100%;
  max-width: 1400px; // Limita a largura máxima
  font-family: "Fira Code", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 20px;
  text-align: center; // Centraliza o texto
`;

const SquaresContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around; // Distribui os quadrados uniformemente
  flex-wrap: wrap; // Permite que os quadrados se ajustem em telas menores
  gap: 20px; // Espaçamento entre os quadrados
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Square = styled.div`
  width: 100%;
  max-width: 400px; // Limita a largura máxima
  height: 400px;
  background-color: ${(props) => props.bgColor || "#5384ee"};
  border: 2.5px solid #000000;
  color: #ffffff;
  margin: 10px; // Espaçamento entre os quadrados
`;

const Works = ({ children }) => {
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
        <Square bgColor="#5384ee" />
        <Square bgColor="#53b3ee" />
        <Square bgColor="#6b53ee" />
      </SquaresContainer>
      <TitleContainer>
        <Title>Projetos</Title>
      </TitleContainer>
      <Description>
        <p>Confira alguns projetos que eu desenvolvi:</p>
      </Description>
      {children}
    </WorksContainer>
  );
};

export default Works;