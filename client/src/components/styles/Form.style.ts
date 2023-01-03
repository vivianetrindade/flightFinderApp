import styled from "styled-components";
import RadioInput from "../RadioInput";
import SelectInput from "../SelectInput";
import DatePickerComponent from "../DatePicker";

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

export const StyledRadioInput = styled(RadioInput)`
  margin: 0.5rem 0.5rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    margin: 0.5rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus};
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: space-between;
  }
`;

export const StyledSelectInput = styled(SelectInput)`
  margin: 0.5rem 0.5rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  select {
    padding: 0.5rem;
    margin: 0.5rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus};
    }
    background-color: #fff;
  }
  option {
    font-size: 1rem;
    background-color: #fff;
`;



export const StyledDatePicker = styled(DatePickerComponent)`
  margin: 0.5rem 0.5rem;
  h2 {
    font-size: 1rem;
    margin: 0.5rem 0;
    font-weight: 400;
  }
  div {
    margin: 0 0.3rem;
  }
  input {
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

export const StyledButton = styled.button`
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.colors.button};
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

  