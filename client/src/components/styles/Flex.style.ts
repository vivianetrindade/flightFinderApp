import styled from 'styled-components'

export const Flex = styled.div<{ direction?: string }>`
  display: flex;
  align-items: center;
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ direction }) => direction || 'column'};
    align-items: baseline;
    justify-content: space-evenly;
  }
`