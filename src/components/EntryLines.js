import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({entries, deleteEntry, setModal, editEntry }) {
  return (
    <>
      {entries.map((entry) => (
        <EntryLine key={entry.id} deleteEntry={deleteEntry} {...entry} setModal={setModal} editEntry={editEntry} />
      ))}
    </>
  )
}

export default EntryLines