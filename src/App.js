import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const addEntry = () => {
    const result = entries.concat({description, value, id:entries.length+1, isExpense: isExpense})
    setEntries(result);
    resetEntry();
  }

  useEffect(() => {
    if (!isOpen && entryId) {
      const newEntries = [...entries];
      const index = newEntries.findIndex(entry => entry.id === entryId);
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if(entry.isExpense) {
        return totalExpense += Number(entry.value);
      }
      return totalIncomes += Number(entry.value);
    });
    setTotal(totalIncomes - totalExpense);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpense);
  }, [entries])

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  return (
   <Container>
    <MainHeader title="Budget" />
    <DisplayBalance title="Your Balance" value={total} size="small" />
    <DisplayBalances income={incomeTotal} expenses={expenseTotal}/>
    <MainHeader title="History" type='h3'/>
    <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry}/>
    <MainHeader title="Add new transaction" type='h3' />
    <NewEntryForm 
      addEntry={addEntry} 
      description={description} 
      value={value} 
      setDescription={setDescription} 
      setValue={setValue}
      isExpense={isExpense}
      setIsExpense={setIsExpense} />
     <ModalEdit 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      description={description} 
      value={value} 
      isExpense={isExpense}
      setIsExpense={setIsExpense}
      setDescription={setDescription} 
      setValue={setValue}/>
   </Container>
  );
}

export default App;

var initialEntries = [
  {
    description: "Work income",
    value: 1000,
    isExpense: false,
    id: 1
  },
  {
    description: "Water bill",
    value: 100,
    isExpense: true,
    id: 2
  },
  {
    description: "Work income",
    value: 10000,
    isExpense: false,
    id: 3
  },
  {
    description: "Work income",
    value: 10000,
    isExpense: false,
    id: 4
  },
]
