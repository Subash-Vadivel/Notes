import Noteslist from './components/Noteslist';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const[notes,setnotes]=useState(
    JSON.parse(localStorage.getItem('data'))
    
);



useEffect(() => {
  localStorage.setItem(
    'data',
    JSON.stringify(notes)
  );
}, [notes]);



const [searchText,setSearchText]=useState('');

const [darkMode,setDarkMode]=useState(false);

const addNote=(text)=>{
  const date=new Date();
  const newNote={id:nanoid(),
  text:text,
  date:date.toLocaleDateString(),
};
  const newNotes=[...notes, newNote];
  setnotes(newNotes);
}
const deleteNote=(id)=>{
   const newnotes=notes.filter((note)=>note.id!==id);
   setnotes(newnotes)
}
  return (
<div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
    <Header handleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
      <Noteslist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div></div>

  );
}

export default App;
