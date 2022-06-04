import Note from './Note';
import Addnote from './Addnote';
function noteslist({notes , handleAddNote,handleDeleteNote})
{
    return(<div className="notes-list">
        {notes.map((note)=>(   <Note text={note.text} id={note.id} date={note.date} handleDeleteNote={handleDeleteNote}/>))}
         <Addnote handleAddNote={handleAddNote}/>
    </div>);
    
}
export default noteslist;