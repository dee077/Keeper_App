
function InputNote(props) {
  function handleSubmit(event){
      if(event.key === "Enter"){
          console.log("Enter Pressed")
      }
      event.preventDefault();
  }
    return (
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" />
          <textarea name="content" placeholder="Take a note..." rows="3" />
          <button>Add</button>
        </form>
        );
  }
  
  export default InputNote;
  