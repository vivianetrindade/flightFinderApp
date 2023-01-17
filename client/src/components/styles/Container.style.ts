import styled from "styled-components";

export const Container = styled.div<{bgcolor?: string}>`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: ${({ theme, bgcolor }) => bgcolor || 'white'};
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

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ;
  margin: 1rem 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  `;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.form};
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
  }
  `;