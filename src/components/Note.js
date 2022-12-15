function Note(props){

    function deleteNote(){
        props.onDelete(props.id);
    }
    return (
        <div className="Note" key={props.key}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}>DELETE</button>
        </div>
        )  
}

export default Note;