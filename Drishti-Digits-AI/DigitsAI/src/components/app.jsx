import React from "react";
import Header from "./header";
import Pixel from "./pixel";
import Axios  from "axios";
import Footer from "./footer";

function makeGrid(xlen, ylen) {
    let grid = []
    for(let i=0; i<xlen; i++){
    let row= []
        for(let j=0; j<ylen; j++){
            row.push(<Pixel x={j} y={i}/>)
        }
        grid.push(<div className="row">{row}</div>)
    }
    return grid
}

function makeMatrix(xlen, ylen) {
    let matrix = []
    for(let i=0; i<xlen; i++) {
        let vector = []
        for(let j=0; j<ylen; j++){
            vector.push(0)
        }
        matrix.push(vector)
    }
    return matrix
}

function App() {
    
    let row = makeGrid(14, 14)
    let mat = makeMatrix(14, 14)

    function Buttons () {
        function clearBoard() {
            window.location.reload(false)
        }
        
        function fetchDigit() {
            let pixels = document.querySelectorAll('.pixel');
            pixels.forEach(pixel=>{
                let pixel_color = pixel.getAttribute("data-color")
                if(pixel_color === "#FFFFFF") {
                    mat[pixel.getAttribute("data-x")][pixel.getAttribute("data-y")] = 1 
                } 
            })
            let vector = [].concat(...mat);
            var param = {
                data : JSON.stringify(vector)
            }
            Axios.post("http://127.0.0.1:5000", param).then(Response => console.log(Response))
        }
    
        return (<div className="button-group">
                <button className="submit-button" type="submit" onClick={fetchDigit} >Detect</button> 
                <button className="clear-button" onClick={clearBoard}>Clear</button>
                </div>)
    }
    
    return (
    <div className="container">
    <div className="app">
        <Header />
        <div className="draw">
            {row}
        </div>
        <Buttons />
    </div>
    <Footer />
    </div>
    );
}

export default App;