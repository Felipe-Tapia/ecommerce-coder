import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

let productos = [
    { id: 1, nombre: 'Manzanas', precio: 100, stock: 15, cantidad: 1 },
    { id: 2, nombre: 'Peras', precio: 200, stock: 15, cantidad: 1 },
    { id: 3, nombre: 'Papas', precio: 300, stock: 15, cantidad: 1 },
    { id: 4, nombre: 'Zanahorias', precio: 400, stock: 15, cantidad: 1 },
    { id: 5, nombre: 'Zapallos', precio: 500, stock: 15, cantidad: 1 }
]

const getFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
}

const Item = () => {
    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
  
    useEffect(() => {
      getFetch()
      .then(data => { setProductos(data) }) 
      .catch(error => { console.log(error) })
      .finally(() => setLoading(false))
    } , [])
  
    console.log(productos)
  return (
    <>
    { loading? <p>Cargando...</p> 
    : 
    productos?.map(producto => ( 
      <div className="card">
      <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Stock: {producto.stock}</p>
          <p className="card-text">Cantidad: {producto.cantidad} kg</p>
          <ItemCount stock={10}/>
          <button type="button" className="btn btn-primary">Agregar</button>
      </div>
    </div>
     ))}
    </>
  )
}

export default Item