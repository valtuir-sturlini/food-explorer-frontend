import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_400};

  display: grid;

  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  header {
    grid-area: header;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    padding-left: 2.8rem;
  }

  main {
    height: 100%;
    grid-area: content;
    width: 38rem;
    margin: 0 auto;
    padding: 3.6rem 2.8rem 0;
    gap: 3.6rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 420px) {
      width: 100%;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-bottom: 4.7rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    display: inline-block;
    width: 100%;
    font-size: 2.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const Search = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;
`;

export const SignOut = styled.button`
  width: 100%;
  text-align: start;
`;
