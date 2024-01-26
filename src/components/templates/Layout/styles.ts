import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 70px auto;

  width: 100vw;
  height: 100vh;

  grid-template-areas:
    "AS MH"
    "AS CT";

  @media (max-width: 578px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
      "MH"
      "CT";
  }
`;
