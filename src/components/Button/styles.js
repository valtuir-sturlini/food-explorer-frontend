import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 4.8rem;
  border: 0;
  border-radius: 0.5rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    height: 3.2rem;
    width: 16.2rem;
    margin: 1.6rem 0 2rem;
  }
`;
