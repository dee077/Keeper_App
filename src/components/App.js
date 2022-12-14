import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from './notearray'
import '../styles/App.css';
import InputNote from './InputNote'

function App() {
  return (
    <>
    <Header />
    <InputNote />
    {notes.map( note =>
       <Note 
          key={note.id}
          title={note.title}
          content={note.content}
       /> )}
    <Footer />
    </>
  );
}

export default App;
