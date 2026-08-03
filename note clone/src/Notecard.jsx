import React from 'react';

function Notecard({ note,index,deleteNote,editNote}) {
    return (


<div key={index}>

    <p>{note}</p>
    <button
    onClick={function(){
      deleteNote(index);
    }}
    >Delete</button>
    <button
    onClick={function(){
    editNote(index);
    }}
    >Edit</button>
</div>


    );
}export default Notecard;