import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from './notearray'
import '../styles/App.css';
import InputNote from './InputNote'
import { useState } from 'react';

function App() {

  const [newNote,setNote]=useState(notes);
  function addNote(inputNotes){
      console.log(inputNotes);
      setNote(prevNotes => {
          return [inputNotes,...prevNotes];
      });
  }
  function deleteNote(id){
      setNote(prevNotes => {
        return prevNotes.filter((notes,index) => {
          console.log(index);  
          return index !== id;
        });
      });
  }

  return (
    <>
    <Header />
    <InputNote
      titleContent={addNote}
    />
    {newNote.map( (noteItem,index) =>
       <Note
          id={index}
          key={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
       /> )}
    <Footer />
    </>
  );
}

export default App;
