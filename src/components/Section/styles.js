import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    margin-bottom: 2.3rem;

    font-family: "Poppins";
    font-weight: 500;
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
