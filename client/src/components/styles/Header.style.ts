import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin--bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50px;
  }
`;