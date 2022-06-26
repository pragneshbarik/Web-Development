import React from "react";
import Header from "./header";
import Pixel from "./pixel";

function makeGrid(xlen, ylen) {
    let grid = []
    for(let i=0; i<xlen; i++){
    let row= []
        for(let j=0; j<ylen; j++){
            row.push(<Pixel x={j} y={i} />)
        }
        grid.push(<div className="row">{row}</div>)
    }
    return grid
}
let row = makeGrid(14, 14)


function Buttons () {
    return (<div className="button-group">
            <button class="submit-button" type="submit" >Detect</button> 
            <button class="clear-button">Clear</button>
            </div>)
}


function App() {
    return (
    <div>
        <Header />
        <div className="draw">
            {row}
        </div>
        <Buttons />
    </div>
    );
}



console.log(row);
export default App;