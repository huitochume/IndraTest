import React, { useState } from 'react'

export default function CambiaColor() {
    const [colorText, setColorText] = useState("white")

    const changeColorBlue = (e) => {
        setColorText("blue")
    }

    const changeColorRed = (e) => {
        setColorText("red")
    }

    return (
        <div className="centeredComponentPrueba" className="col-6" style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            color:colorText
        }}>
            <h2 id="textPrueba">Prueba Basica React</h2>
            <div className="col-6">
                <button className="btn-blue"
                    onClick={() => changeColorBlue()}>
                    Azul
                </button><button className="btn-red"
                    onClick={() => changeColorRed()}>
                    Rojo
                </button>
            </div>
        </div>
    )
}
