import React from 'react'

function Button({ nome, classe }) {
    return (
        <button className={classe}>{nome}</button>
    )
}

export default Button;
