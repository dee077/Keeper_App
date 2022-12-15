import { useState } from "react";

function InputNote(props) {

    const [note,setNote]=useState({
          title: "",
          content: ""
    });
    function noteHandler(event){
          const {name,value}=event.target;
          setNote( prevValue => {
              return {
                  ...prevValue,
                  [name]: value
              };
          });
    }
    function submitHandler(event){
          props.titleContent(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
    }
      return (
          <form>
            <input className="inputField"
              onChange={noteHandler}
              value={note.title}
              name="title" 
              placeholder="Title" 
            />
            <textarea 
              onChange={noteHandler}
              value={note.content}
              name="content" 
              placeholder="Take a note..." 
              rows="3" 
            />
            <button onClick={submitHandler}>Add</button>
          </form>
          );
  }
  
  export default InputNote;
  