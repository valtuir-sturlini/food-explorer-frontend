import styled from "styled-components";

export const Container = styled.section`
  main {
    align-items: center;
    margin-bottom: 2.4rem;

    div {
      display: flex;

      @media (max-width: 768px) {
        display: grid;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }

    #minus {
      align-self: flex-start;
    }

    span {
      font-weight: 700;
      font-size: 2rem;
    }

    button {
      padding: 1.4rem;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;

      img {
        height: 1.8rem;
        width: 1.8rem;
      }

      button {
        padding: 0;
      }
    }
  }
`;

export const ButtonValue = styled.button`
  background: none;
  border: none;
`;
