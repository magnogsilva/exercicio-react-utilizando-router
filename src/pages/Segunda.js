import { useState } from 'react';

function Segunda() {

    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>Segunda Página</h1>
            <h2>Conteúdo da página</h2>
            <p>Você clicou {number} vez(es).</p>
            <button onClick={() => setNumber(number + 1)}>
                Click Aqui
            </button>
        </div>
    )
}

export default Segunda
