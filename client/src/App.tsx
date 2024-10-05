import './App.css'
import DropDown from './components/DropDown'

function App() {

  const options = [
    { label: 'C++', value: 'C++' },
    { label: 'Python', value: 'Python' },
    { label: 'JS', value: 'JS' },
    { label: 'Databases', value: 'Databases' },
    { label: 'React JS', value: 'React JS' },
    { label: 'Express JS', value: 'Express JS' },
    { label: 'Node JS', value: 'Node JS' },
    { label: 'Mongo Db', value: 'Mongo Db' },
    { label: 'SQL', value: 'SQL' },
    { label: 'Version Control', value: 'Version Control' },

  ];
  return (
    <>
      <DropDown options={options}/>
    </>
  )
}

export default App
