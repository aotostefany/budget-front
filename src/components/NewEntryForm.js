import React from 'react'
import ButtonSaveCancel from './ButtonSaveCancel';
import { Form } from 'semantic-ui-react';

function NewEntryForm() {
  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input 
        placeholder="new shine thing" 
        icon="tags" 
        width={12} 
        label="description"/>
      <Form.Input 
        label="value"
        placeholder="100,00"
        width={4} 
        icon='dollar'
        iconPosition='left'/>
    </Form.Group>
    <ButtonSaveCancel />
  </Form>
  )
}

export default NewEntryForm