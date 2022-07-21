import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = () => {
    const stock = 15;
    const [counter, setCounter] = useState(1);

    const sumarCantidad = ()=> counter+1 <= stock ? setCounter(counter + 1) : setCounter(counter);
    const restarCantidad = ()=> counter-1 >= 1 ? setCounter(counter - 1) : setCounter(1);
    //const agregar = ()=> onAdd(counter);
    
    return <div className="contador-card ">
                <div className="contador-container ">
                    <button onClick={restarCantidad} type="button" className="btn btn-outline-light">-</button>
                    <p className="text-light bg-dark counter-number">{counter}</p>
                    <button onClick={sumarCantidad} type="button" className="btn btn-outline-light">+</button>  
                </div>
            </div>
}

export default ItemCount