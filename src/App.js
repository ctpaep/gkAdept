import './App.css';
import Employee from './components/TableUser'
import Company from './components/TableCompany'
import {onSelect, onUpdate, onDelete}  from './helpers/editInput'
import { useSelector } from 'react-redux'

function App() {
  const selectCompany = useSelector((store) => store.selectCompany)
  return (
<div className="container">
  <div className="row"><Company props={{onSelect, onUpdate, onDelete}}/></div>
  {selectCompany.length ? (
    <div className="row"><Employee props={{onSelect, onUpdate, onDelete}}/></div>
  ) : (
    <></>
  )}
  
</div>
  );
}

export default App;
