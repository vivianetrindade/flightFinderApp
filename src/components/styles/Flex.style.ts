import styled from 'styled-components'

export const Flex = styled.div<{ direction?: string }>`
  display: flex;
  align-items: center;
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ direction }) => direction || 'column'};
    justify-content: space-between;
    align-items: stretch;
  }
`