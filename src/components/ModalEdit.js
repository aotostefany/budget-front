import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, setValue, isExpense, setIsExpense, setDescription }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm 
            description={description} 
            value={value} 
            isExpense={isExpense}
            setIsExpense={setIsExpense}
            setDescription={setDescription} 
            setValue={setValue}
          />
        </Modal.Description>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button primary onClick={() => setIsOpen(false)}>Save</Button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  )
}

export default ModalEdit