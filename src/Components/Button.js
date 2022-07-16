import React from 'react'

export default function Button(){

    const [valor, setValor] = React.useState(0)


    function clique(texto){
        setValor(valor + 1)
    }

    

    return (
        <div>
            <button onClick={clique}>{valor}</button>
        </div>

    );
}