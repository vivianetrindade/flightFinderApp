import React from 'react';
import { Container } from './styles/Container.style';
import { StyledForm, StyledRadioInput, StyledSelectInput, StyledDatePicker } from './styles/Form.style';
import { Flex } from './styles/Flex.style';

function Form() {
  return (
    <Container>
      <StyledForm>
        <label htmlFor="">Find your Flight</label>
        <Flex>
          <StyledRadioInput id='one-way' name='trip' value='one-way' label='One-Way' type='radio' />
          <StyledRadioInput id='round-trip' name='trip' value='round-trip' label='Round-trip' type='radio' />
        </Flex>
        <Flex>
          <StyledSelectInput name='origin' id='origin' label='Origin' />
          <StyledSelectInput name='destination' id='destination' label='Destination' />
        </Flex>
        <Flex>
          <StyledDatePicker title='Departure Date'/>
          <StyledDatePicker title='Return Date'/>
        </Flex>
        

      </StyledForm>
    </Container>
  )
}

export default Form;