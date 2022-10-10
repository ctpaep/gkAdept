import './App.css';
import Employee from './components/TableUser'
import Company from './components/TableCompany'
import { onUpdate, onDelete } from './helpers/editInput'
import { useSelector } from 'react-redux'

function App() {
  const selectCompany = useSelector((store) => store.selectCompany)
  return (
    <div className="container">
      <div className="row"><Company props={{ onUpdate, onDelete }} /></div>
      {selectCompany.length ? (
        <div className="row"><Employee props={{ onUpdate, onDelete }} /></div>
      ) : (
        <></>
      )}

    </div>
  );
}

export default App;
