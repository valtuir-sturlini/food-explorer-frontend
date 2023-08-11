import styled from "styled-components";

export const Container = styled.section`
  width: 30rem;
  height: 46rem;

  display: grid;
  justify-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 2.7rem;

  font-family: "Roboto", sans-serif;

  gap: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  position: relative;

  > button {
    height: 2.2rem;
    width: 2.2rem;
    position: absolute;
    background: none;
    border: none;

    margin: 0;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    height: 17.6rem;
    width: 17.6rem;
    margin-top: 2.4rem;
    border-radius: 50%;
    cursor: pointer;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > h2 {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 0 2.4rem;
    text-align: center;
  }

  > p {
    font-size: 3.2rem;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;

    span {
      font-weight: 700;
      font-size: 2rem;
    }

    button {
      padding: 1.4rem;
    }

    button:last-child {
      padding: 1.2rem 2.4rem;
    }
  }

  @media (max-width: 768px) {
    height: 29rem;
    width: 21rem;

    img {
      width: 8.8rem;
      height: 8.8rem;
    }

    h1 {
      text-align: center;
      font-size: 1.4rem;
    }

    h2 {
      display: none;
    }

    p {
      font-size: 1.6rem;
      margin: 0;
    }

    .favoriteHeart {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
