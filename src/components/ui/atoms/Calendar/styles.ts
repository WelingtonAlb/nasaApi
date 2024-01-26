import styled from "styled-components";

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  width: 100%;

  padding: 1rem;

  .styleCalendar {
    width: 100%;

    background: ${(props) => props.theme.colors.secondary};

    border-radius: 8px;
  }
`;

export const ChoicedDate = styled.p`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.tertiary};

  height: 2rem;

  padding: 0.5rem;

  border-radius: 4px;
`;
