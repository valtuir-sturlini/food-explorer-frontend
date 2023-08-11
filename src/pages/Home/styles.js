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

  > main {
    grid-area: content;
    padding: 0 12.3rem;
    margin-bottom: 4.7rem;

    @media (max-width: 768px) {
      width: 100vw;
      padding: 0 1.6rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  z-index: 0;

  .frame-wrapper {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .frame-container {
    position: relative;
  }

  .frame-wrapper::-webkit-scrollbar {
    display: none;
  }

  .scroll-button {
    width: 3rem;
    height: 3rem;
    background: none;
    cursor: pointer;
    position: absolute;
  }

  .scroll-button svg {
    z-index: 1;
    width: 4rem;
    height: 46rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .scroll-button-right {
    right: 0;
  }

  #arrowBack {
    transform: translateX(100%);
    background: rgb(0, 10, 15);
    background: linear-gradient(
      to left,
      rgba(0, 10, 15, 0.6026785714285714) 0%,
      rgba(0, 10, 15, 0.7959558823529411) 35%,
      rgba(0, 10, 15, 1) 100%
    );
    position: absolute;
    right: 4rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  #arrowForward {
    background: rgb(0, 10, 15);
    background: linear-gradient(
      to right,
      rgba(0, 10, 15, 0.6026785714285714) 0%,
      rgba(0, 10, 15, 0.7959558823529411) 35%,
      rgba(0, 10, 15, 1) 100%
    );
    position: absolute;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: 1250px) {
    width: 100vw;
  }
`;

export const Slogan = styled.div`
  width: 100%;
  height: 26rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  margin: 16.4rem auto 6.2rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 8px;

  .sloganImg {
    img {
      position: absolute;
      top: -14.6rem;
      left: -5.5rem;
    }
  }

  .sloganText {
    align-self: center;
    padding-right: 5rem;
    position: relative;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 4rem;
    }

    p {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 1.6rem;

      @media (min-width: 769px) and (max-width: 1380px) {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 12rem;
    width: 100%;
    max-width: 50rem;
    margin: 4.4rem auto 6.2rem;
    border-radius: 3px;

    .sloganImg {
      opacity: 70%;

      img {
        top: -29px;
        left: -25px;

        width: 19rem;
        height: 15rem;
      }
    }

    .sloganText {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      padding: 0 0.5rem 0 3rem;

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 500px) {
    .sloganImg {
      opacity: 50%;
    }
  }
`;
