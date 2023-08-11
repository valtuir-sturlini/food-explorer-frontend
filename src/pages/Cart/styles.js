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

  main {
    display: flex;
    grid-area: content;
    gap: 7.5rem;
    margin: 3.4rem auto;
    width: 80%;

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
      margin-bottom: 3.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .frame-wrapper {
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
        display: grid;
        justify-content: center;
      }
    }

    .order-wrapper {
      display: flex;
      align-items: center;
      padding: 1.6rem 0;
    }

    .content-wrapper {
      padding-left: 1.3rem;
    }

    .orderDetails {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media (max-width: 768px) {
        h2 {
          font-size: 1.5rem;
        }
      }
    }

    img {
      width: 7.2rem;
      height: 7.2rem;
    }

    h2 {
      font-weight: 500;
      font-size: 2rem;
    }

    h3 {
      font-weight: 500;
      font-size: 2rem;
      padding-top: 1.6rem;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.RED_400};
    }

    .payment-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 53rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 8px;
      height: 44.5rem;

      @media (max-width: 768px) and (min-width: 425px) {
        width: 37rem;
      }

      @media (max-width: 424px) {
        width: 30rem;
      }
    }

    .method-wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 8rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

      div {
        display: flex;
        justify-content: center;

        width: 50%;
        height: 100%;

        button {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      .pix-method {
        border-radius: 0.8rem 0 0 0;
        border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      }

      .creditCard-method {
        border-radius: 0 0.8rem 0 0;
      }

      .selected {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      > svg {
        width: 24px;
        height: 24px;
      }
    }

    .details-wrapper {
      display: flex;
      justify-content: center;
      margin: auto;
    }

    .details-wrapper img {
      width: 25rem;
      height: 25rem;
    }

    .creditCard-payment {
      width: 100%;
      max-width: 35rem;
      padding: 0 0.8rem;

      div {
        border: 1px solid;
        margin-top: 0.8rem;
      }

      button {
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      img {
        height: 32px;
        width: 32px;
      }

      p {
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        padding: 0 0.8rem;

        a {
          background-color: ${({ theme }) => theme.COLORS.RED_100};
        }
      }
    }

    .creditCard-payment .col-2 {
      display: flex;
      gap: 1.7rem;
      border: none;
      margin: 3.7rem 0;

      div {
        border: none;
        margin: 0;
      }
    }

    .col-2 .expirationDateField div {
      border: 1px solid;
      margin-top: 8px;
    }

    .col-2 .cvcField div {
      border: 1px solid;
      margin-top: 8px;
    }

    #closeOrder {
      width: 100%;

      @media (max-width: 768px) {
        img {
          display: none;
        }

        p {
          display: block;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  footer {
    grid-area: footer;
    align-self: flex-end;
  }
`;
