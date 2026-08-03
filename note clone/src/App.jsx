import React from 'react';
import Navbar from './Navbar';
import Notes from './Notes';

function App() {
 const[input,setInput]=React.useState("");   
const[notes,setNotes]=React.useState([]);

    return (
<div>
<Navbar></Navbar>
<Notes
input={input}
setInput={setInput}
notes={notes}
setNotes={setNotes}
></Notes>


</div>
 );
}export default App;