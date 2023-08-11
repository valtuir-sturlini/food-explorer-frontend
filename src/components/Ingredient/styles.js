import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;

  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  margin-right: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
