import React from "react";

function NumeroRandom(){
    const numero= Math.floor(Math.random() * 100);
    return(
        <button onClick={NumeroRandom}>Incrementar</button>
        
        
        )
}


export default NumeroRandom