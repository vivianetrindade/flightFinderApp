import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.form};
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus};
  }
`;