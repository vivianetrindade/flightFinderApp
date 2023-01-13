import styled from 'styled-components';

export const StyledButton = styled.button<{ margin?: string }>`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0.5rem 0.5rem ${({ margin }) => margin || '50rem'};
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  :hover:not(:disabled) {
    background-color: #ebfbff;
    color: #000;
  }
  
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5rem 0.5rem 0.5rem 10rem;
  }
`;