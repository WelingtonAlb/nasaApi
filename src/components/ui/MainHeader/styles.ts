import styled from "styled-components";

export const MainHeader = styled.div`
  grid-area: MH;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: ${(props) => props.theme.colors.primary};
`;

export const Image = styled.img`
  width: 72px;
  height: auto;
`;
