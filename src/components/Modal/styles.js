import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 5;
  top: 3.7rem;
  left: 50%;
  transform: translateX(-50%);

  width: 30rem;
  height: 3rem;
  border-radius: 4rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  color: ${({ theme }) => theme.COLORS.DARK_700};

  div {
    align-items: center;
    padding: 0.2rem;

    > p {
      font-size: 1.8rem;
    }
  }

  svg {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
  }

  .modal-transition {
    transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
`;
