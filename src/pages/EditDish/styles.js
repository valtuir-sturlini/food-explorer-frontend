import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-top: 2.4rem;
  }

  > footer {
    align-self: flex-end;
  }
`;

export const Form = styled.form`
  grid-area: content;
  display: grid;
  justify-self: center;
  width: 1120px;

  margin: 0 12.3rem;

  > main {
    display: grid;
    gap: 3.2rem;

    @media (max-width: 500px) {
      width: 100%;
    }

    @media (min-width: 500px) and (max-width: 768px) {
      width: 50rem;
    }
  }

  .fieldset-wrapper {
    display: flex;
    gap: 3.2rem;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 50rem;
    }
  }

  .input-wrapper {
    display: grid;
    gap: 1.6rem;
    align-items: flex-start;

    > div {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 50rem;
    }
  }

  .frame-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 50rem;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5.3rem;

    #buttonFirst {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      width: 13.5rem;

      @media (max-width: 768px) {
        max-width: 16rem;
      }
    }

    #buttonSecond {
      background-color: ${({ theme }) => theme.COLORS.RED_400};
      margin-right: 0;

      @media (max-width: 768px) {
        max-width: 16rem;
      }
    }

    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }

  #name {
    width: 50rem;

    @media (max-width: 768px) {
      width: auto;
    }

    @media (min-width: 769px) and (max-width: 1380px) {
      width: 27rem;
    }
  }

  #category {
    @media (max-width: 768px) {
      width: auto;
    }

    @media (min-width: 769px) and (max-width: 1380px) {
      width: 18rem;
    }
  }

  #ingredients {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    border-radius: 0.5rem;
    width: 83.7rem;
    display: flex;
    align-items: center;

    span {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    overflow-x: auto;
    overflow-y: hidden;

    @media (max-width: 768px) {
      width: auto;
    }

    @media (min-width: 769px) and (max-width: 1380px) {
      width: 39rem;
    }
  }

  #price {
    width: 25rem;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  select {
    border: none;
    border-radius: 0.5rem;
    padding: 1.3rem 1.6rem;
    height: 4.8rem;
    width: 36.4rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100vw;

    margin: 0 3.2rem;
  }

  @media (min-width: 769px) and (max-width: 1380px) {
    width: 70rem;
    margin: 0 3rem;
  }
`;
