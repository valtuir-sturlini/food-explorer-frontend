import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 3.2rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  padding: 0.8rem 1.6rem;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > button {
    border: none;
    background: none;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    width: 8rem;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
