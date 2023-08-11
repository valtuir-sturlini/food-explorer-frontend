import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;

  .input-wrapper {
    position: relative;
    display: inline-block;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 4.8rem;
    border: none;
    border-radius: 0.8rem;
    padding: 1.2rem 3.2rem;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
  }

  #myFileInput {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
