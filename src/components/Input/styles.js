import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  height: 4.8rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  justify-content: center;

  > input {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    background: none;
    border: 0;
    outline: none;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
