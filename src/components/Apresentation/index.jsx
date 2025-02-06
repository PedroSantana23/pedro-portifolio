import styled from "styled-components";
import React from "react";
import "@fontsource/fira-code";
import "../../../public/foto_perfil.png";
import "../../../public/gmail.svg";
import "../../../public/copy.svg";

const ApresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: monospace;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 130px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: monospace;
  max-width: 800px;
  margin: 0;
  padding: 20px;
`;

const Attributes = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 25px;
  margin: 10px 0;
`;

const Title = styled.p`
  color: #000000;
  font-size: 50px;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #000000;
  font-size: 20px;
  margin: 10px 0;
  line-height: 1.5;
`;

const FotoDePerfil = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: monospace;
  margin-top: 50px;
`;

const EmailButton = styled.button`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  margin-top: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  gap: 15px; /* Espaçamento simétrico entre os elementos internos */
  font-family: "Fira Code", monospace;
  font-size: 16px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: rgb(165, 165, 165);
    transition: 0.3s;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Apresentation = () => {
  return (
    <ApresentationContainer>
      <InfoContainer>
        <Title>
          Olá, meu nome é <strong>Pedro Henrique</strong>
        </Title>
        <Attributes>
          Cientista da Computação & Desenvolvedor Full-Stack
        </Attributes>
        <Description>
          Sou um desenvolvedor apaixonado por tecnologia e pela criação de
          soluções eficientes para problemas complexos. Tenho experiência em
          desenvolvimento front-end e back-end, com especialidade em React e
          Node.js.
        </Description>
        <EmailContainer>
            <h2>Me mande um e-mail</h2>
          <EmailButton>
            <Icon src="gmail.svg" />
            <strong>ph.silva.santana@gmail.com</strong>
            <Icon src="copy.svg" />
          </EmailButton>
        </EmailContainer>
      </InfoContainer>
      <FotoDePerfil src="/foto_perfil.png" alt="Foto de Perfil" />
    </ApresentationContainer>
  );
};

export default Apresentation;
