import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 10.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 769px) {
    .menuButton {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    justify-content: space-around;

    button {
      background: none;
      border: none;
    }
  }

  .sidebar-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .sidebar-mobile a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
  }
`;

export const Logo = styled(Link)`
  background: none;
  border: none;
`;

export const Search = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  margin: 0 3.2rem;

  border-radius: 0.5rem;

  input {
    display: flex;
    flex: 1;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  width: 21.6rem;
  height: 5.6rem;
  margin-right: 3.2rem;
  padding: 0 0.5rem;

  border: 0;
  border-radius: 0.5rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  @media (max-width: 768px) {
    background: none;
    margin: 0;
    width: auto;

    p {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: 1380px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const SignOut = styled.button`
  border: none;
  background: none;

  > img {
    width: 2.2rem;
    height: 2.2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
