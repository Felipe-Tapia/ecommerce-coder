import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({intial=1, stock=15 , onAdd}) => {
    const [counter, setCounter] = useState(1);

    const sumarCantidad = () => counter + 1 <= stock ? setCounter(counter + 1) : setCounter(counter);
    const restarCantidad = () => counter - 1 >= 1 ? setCounter(counter - 1) : setCounter(1);
    const handleAddToCart = () => onAdd(counter);
    
    return <div className="card w-25" style={{margin:"auto"}}>
                <div className="contador-container row ">
                    <button onClick={sumarCantidad} type="button" className="btn btn-outline-primary "> + </button>  
                    <p className="">{counter}</p>
                    <button onClick={restarCantidad} type="button" className="btn btn-outline-primary ">  -  </button>
                    <button className="btn btn-outline-success" onClick={handleAddToCart} type="button"> Agregar</button>
                </div>
            </div>
}

export default ItemCount
