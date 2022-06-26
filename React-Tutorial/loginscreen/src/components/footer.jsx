import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return(<footer><p>Copyright ©️ <b>Pragnesh Barik, {year}</b></p></footer>);
}

export default Footer;