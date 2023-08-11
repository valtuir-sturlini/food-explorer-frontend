import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 1.1rem;
  margin-top: 2.4rem;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (max-width: 768px) {
    font-size: 1.6rem;
    font-weight: 500;
    gap: 0;

    img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
