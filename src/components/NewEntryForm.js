import React from 'react'
import ButtonSaveCancel from './ButtonSaveCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry, description, value, isExpense, setDescription, setValue, setIsExpense }) {
  return (
    <Form unstackable>
      <EntryForm description={description} value={value} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} isExpense={isExpense}/>
      <ButtonSaveCancel  addEntry={addEntry}  />
    </Form>
  )
}

export default NewEntryForm