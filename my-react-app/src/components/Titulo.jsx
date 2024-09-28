import { useState } from "react";

function Titulo({cor}) {

    const [titulo, setTitulo] = useState('Titulo inicial');
    const [inputText, setInputText] = useState('');

    const btn = {
        cursor: 'pointer',
        border: 'none',
        marginLeft: '10px'
    }

    function clicar() {
        setTitulo(inputText);
    }
    
    return(
        <div>
            <h1 style={{color: cor}}>
                {titulo}
            </h1>
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
            <button style={btn} onClick={clicar}>Mudar</button>
        </div>
    );
}

export default Titulo;