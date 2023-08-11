import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.3rem;
  height: 7.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  align-self: flex-end;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: space-around;
    text-align: center;

    font-size: 1.2rem;

    img {
      width: 14.2rem;
      height: 1.8rem;
    }
  }
`;
