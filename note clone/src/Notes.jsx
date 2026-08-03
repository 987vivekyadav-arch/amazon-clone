import React from 'react';
import Notecard from './Notecard';

function Notes({ notes, setNotes, input, setInput }) {
  function deleteNote(clickedIndex) {
 const newNotes =notes.filter(function(currentNote,currentIndex){
    if(currentIndex!==clickedIndex){
      return true;
   }
    return false;
   });
  
 setNotes(newNotes) ;
}  
const[editIndex,setEditIndex]=React.useState(null);
function editNote(clickedIndex) {
 const selectedNote=notes[clickedIndex];
 setInput(selectedNote);
 setEditIndex(clickedIndex)}
   return (
<div>
   
        <input
        value={input}
        onChange={function(event){
            setInput(event.target.value)}}/>
         <button onClick={function(){
         if(editIndex!==null){
const newNotes=notes.map(function(currentNote,currentIndex){
if(currentIndex===editIndex){return input;  
}
return currentNote
});
setNotes(newNotes);
setInput('');
setEditIndex(null)
         }else{

            setNotes([...notes,input]);
        setInput("");}
        }}
        >Add Note</button>
 <h2>NOTES</h2>


{notes.map(function(note,index){
return(
<Notecard
index={index}
note={note}
deleteNote={deleteNote}
editNote={editNote}
></Notecard>

)


})}
    
</div>

    );
}export default Notes;