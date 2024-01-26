import styled from "styled-components";

export const Aside = styled.div`
  grid-area: AS;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  background: ${(props) => props.theme.colors.primary};

  box-shadow: 0 0 5px ${(props) => props.theme.colors.white};

  @media (max-width: 578px) {
    display: none;
  }
`;
