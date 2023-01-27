import styled from 'styled-components'

export const Flex = styled.div<{ direction?: string, width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ direction }) => direction || 'column'};
    align-items: baseline;
    justify-content: space-evenly;
  }
`
export const Flex2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: auto;
  }
`;

export const Flex3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 5rem;
  > * {
    flex:30%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: auto;
  }
`;

