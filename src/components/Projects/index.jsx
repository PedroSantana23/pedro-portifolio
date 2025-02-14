import styled from "styled-components";
import FinCo from "../../assets/Finco.jpeg";
import React from "../../assets/react-js.svg";
import Node from "../../assets/node-js.svg";
import Typescript from "../../assets/typescript.svg";
import Mongo from "../../assets/mongodb.svg";
import Prisma from "../../assets/prisma-orm.svg";
import Docker from "../../assets/docker.svg";
import { IoEye } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import "@fontsource/fira-code";


const ProjectMainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Fira Code", monospace;
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NotebookContainer = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
`;

const NotebookImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ScreenImage = styled.img`
  position: absolute;
  top: 10%; // Ajuste conforme necessário
  left: 11%; // Ajuste conforme necessário
  width: 78%; // Ajuste conforme necessário
  height: 73%; // Ajuste conforme necessário
  object-fit: cover; // Garante que a imagem cubra a área sem distorcer
  border-radius: 5px; // Bordas arredondadas para combinar com a tela
`;

const ProjectInfo = styled.div`
  max-width: 700px;
  width: 100%;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const TitleContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UsedTechs = styled.div`
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const TechsContainer = styled.div`
  width: 400px;
  height: 50px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
`;

const DeployButton = styled.button`
  width: 200px;
  height: 55px;
  background-color: #000;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: 1.8px solid #000000;
  &:hover {
    background: #ffffff;
    color: #000000;
    transition: 0.4s;
  }
`;

const GitHubButton = styled.button`
  width: 200px;
  height: 55px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  color: #000000;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: 1.8px solid #000000;
  &:hover {
    background: #000000;
    color: #ffffff;
    transition: 0.4s;
  }
`;

const Project = () => {
  return (
    <ProjectMainContainer>
      <ProjectContainer>
        <NotebookContainer>
          <NotebookImage src="/notebook.svg" alt="Notebook" />
          <ScreenImage src={FinCo} alt="FinCo Project" />
        </NotebookContainer>
        <ProjectInfo>
          <TitleContainer>
            <h2>Controle Financeiro</h2>
          </TitleContainer>
          <DescriptionContainer>
            <p>
              Aplicação web de controle financeiro “FinCo”. Nesta aplicação web,
              fiz o projeto de ponta a ponta, desenvolvendo o banco de dados, o
              front-end e o back-end. Esse projeto tem por objetivo ajudar as
              pessoas a controlar os seus gastos pessoais para conseguirem
              economizar dinheiro e também ter o controle de seus investimentos.
            </p>
          </DescriptionContainer>
          <WorkoutContainer>
            <UsedTechs>
              <h4>Tecnologias usadas:</h4>
              <TechsContainer>
                <Icon src={React}/>
                <Icon src={Node}/>
                <Icon src={Typescript}/>
                <Icon src={Mongo}/>
                <Icon src={Prisma}/>
                <Icon src={Docker}/>
              </TechsContainer>
            </UsedTechs>
            <ButtonsContainer>
              <DeployButton><IoEye size={45}/>Versão deploy</DeployButton>
              <GitHubButton><IoLogoGithub size={45}/>Ver no GitHub</GitHubButton>
            </ButtonsContainer>
          </WorkoutContainer>
        </ProjectInfo>
      </ProjectContainer>
    </ProjectMainContainer>
  );
};

export default Project;
