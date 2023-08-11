import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  align-items: center;
  justify-content: space-around;

  > img {
    width: 32.4rem;
    height: 4.8rem;
  }

  @media (max-width: 768px) {
    padding-top: 10rem;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.4rem;
  gap: 3.2rem;

  width: 47.6rem;

  border-radius: 1.6rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 3.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  label {
    font-family: "Roboto";
    font-size: 1.6rem;
  }

  #signUp {
    height: 4.8rem;
    width: 100%;
  }

  button:last-child {
    font-family: "Poppins";
    font-size: 1.4rem;

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 768px) {
    background: none;
    padding: 0 3rem;
    margin-top: 7.3rem;
    width: 100%;
    max-width: 50rem;

    justify-content: flex-start;

    h1 {
      display: none;
    }
  }
`;
