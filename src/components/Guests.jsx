import React, { useState, useEffect } from 'react';

export default function Guests({setTotal}) {
  // Estados para adultos y niños
  const [adultos, setAdultos] = useState(0);
  const [ninos, setNinos] = useState(0);

  // Actualizar el total de invitados cada vez que cambien los adultos o niños
  useEffect(() => {
    setTotal(adultos + ninos);
  }, [adultos, ninos]);

  // Funciones para manejar el incremento y decremento
  const incrementarAdultos = () => setAdultos(adultos + 1);
  const decrementarAdultos = () => setAdultos(adultos > 0 ? adultos - 1 : 0);

  const incrementarNinos = () => setNinos(ninos + 1);
  const decrementarNinos = () => setNinos(ninos > 0 ? ninos - 1 : 0);

  return (
    <div>
      <div className='container_contador'>
        <h4>Adults</h4>
        <span>Ages 13 or above</span>
        <div className='contadores'>
            <button onClick={incrementarAdultos}>+</button>
            <h4>{adultos}</h4>
            <button onClick={decrementarAdultos}>-</button>
        </div>
      

      <div>
        <h4>Children</h4>
        <span>Ages 2-12</span>
        <div className='contadores'>
            <button onClick={incrementarNinos}>+</button>
            <h4>{ninos}</h4>
            <button onClick={decrementarNinos}>-</button>
        </div>
      </div>
      </div>
    </div>
  )
}
