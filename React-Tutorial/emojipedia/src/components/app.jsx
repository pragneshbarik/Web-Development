import React from "react";
import Header from "./header";
import Footer from "./footer";
import Card from "./card";
// {
    //     emoji : "😄",
    //     name : "Grinning Face with Smiling Eyes",
    //     def : ""
    // }

let emoji_data = [
    {
        emoji : "😀",
        name : "Grinning Face",
        def : "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."
    },
    {
        emoji : "😄",
        name : "Grinning Face with Smiling Eyes",
        def : "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement."
    },
    {
        emoji : "😅",
        name : "Grinning Face with Sweat",
        def : "Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Commonly used to express a close call. "
    },

]

const cards = emoji_data.map((entry)=>{
    return(<Card emoji={entry.emoji} name={entry.name} def={entry.def}/>)
})


function App() {
    return (
    <div>
    <Header />
    <div className="cards">
        {cards}
    </div>
    <Footer />
    </div>);

}

export default App;