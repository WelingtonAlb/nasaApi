import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
  height: max-content;

  border-radius: 8px;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  gap: 2rem;
`;

export const Image = styled.img`
  width: 700px;
  height: 500px;

  border-radius: 8px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};

  margin-bottom: 1rem;
`;

export const Description = styled.span`
  color: ${(props) => props.theme.colors.white};

  width: 350px;

  margin-bottom: 1rem;
`;

export const CopyRight = styled.h6`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.white};
`;
