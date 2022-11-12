import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({ description, value, setDescription, setValue, isExpense, setIsExpense }) {
  return (
    <Fragment>
      <Form.Group>
      <Form.Input 
        placeholder="new shine thing" 
        icon="tags" 
        width={12} 
        label="description"
        value={description} 
        onChange={(e) => setDescription(e.target.value)}/>
      <Form.Input 
        label="value"
        placeholder="100,00"
        width={4} 
        icon='dollar'
        iconPosition='left'
        value={value} 
        onChange={(e) => setValue(e.target.value)}/>
    </Form.Group>
    <Segment compact>
      <Checkbox label='is expense?' toggle checked={isExpense} onChange={() => setIsExpense((oldState) => !oldState)} />
    </Segment>
    </Fragment>
  )
}

export default EntryForm