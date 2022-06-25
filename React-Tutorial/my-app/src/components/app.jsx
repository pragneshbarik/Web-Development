import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";


const note_titles = ["First Note", "Second Note", "Good Day", "To Bring"];
const note_contents = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

let notes = []

note_titles.forEach((title, index)=>{
    notes.push(<Note index = {index+1} title={title} content={note_contents}/>)
})

let todo = 
<ul>
    <li>Bring Milk</li>
    <li>Study</li>
    <li>Do Homework</li>
    <li>Sleep</li>
</ul>

notes.push(<Note index = "5" title="To-Do" content={todo}/>);




function App() {
    return (
    <div>
    <Header />
    <div className="notes">
    {notes}
    </div>
    <Footer />
    </div>);

}

export default App;