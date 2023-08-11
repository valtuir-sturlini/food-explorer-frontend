import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;
  overflow: hidden;

  border-radius: 0.8rem;
  padding: 1.4rem;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  @media (max-width: 768px) {
    max-width: 50rem;
  }
`;
