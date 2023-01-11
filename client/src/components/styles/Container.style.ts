import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Container2 = styled.div`
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