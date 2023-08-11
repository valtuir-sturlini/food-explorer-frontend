import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: "Poppins", sans-serif;

  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    align-self: center;
    padding: 0 12.3rem;

    @media (max-width: 768px) {
      padding: 0 5.6rem;
    }
  }

  > footer {
    align-self: flex-end;
  }
`;

export const Content = styled.div`
  max-width: 112rem;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4.8rem;
  margin-top: 4.2rem;

  #dishImage {
    border-radius: 50%;
    width: 39rem;
    height: 39rem;
  }

  div {
    display: grid;
    gap: 2.4rem;

    > .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 0;
      row-gap: 1.2rem;
      height: fit-content;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }

    > .include {
      margin-top: 2.4rem;
      width: 29.4rem;

      @media (max-width: 768px) {
        main {
          flex-direction: row;
          gap: 1.6rem;
        }
      }
    }

    @media (max-width: 768px) {
      justify-items: center;
      text-align: center;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 4rem;
  }

  p {
    font-weight: 400;
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    #dishImage {
      width: 26.4rem;
      height: 26.4rem;
    }

    h1 {
      font-size: 2.7rem;
    }

    p {
      font-size: 1.6rem;
    }

    button {
      height: 4.8rem;
    }
  }
`;
