import React from 'react';
import { Container } from './styles/Container.style';
import { StyledForm, StyledInput, StyledLabel } from './styles/Form.style';
import { Flex } from './styles/Flex.style';

function Form() {
  return (
    <Container>
      <StyledForm>
        <label htmlFor="">Find your Flight</label>
        <Flex>
          <Flex direction='row'>
            <StyledLabel htmlFor="one-way">One-Way</StyledLabel>
            <StyledInput type='radio' id='one-way' name='trip' value='one-way' />
          </Flex>
          <Flex direction='row'>
            <StyledLabel htmlFor="round-trip">Round-trip</StyledLabel>
            <StyledInput type='radio' id='round-trip' name='trip' value='round-trip' />
          </Flex>
        </Flex>
        <input type="text" id="origin" placeholder="Origin" />
        <input type="text" id="destination" placeholder="Destination" />

      </StyledForm>
    </Container>
  )
}

export default Form;