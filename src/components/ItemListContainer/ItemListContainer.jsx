import React from 'react'
import ItemCount from '../ItemCount/ItemCount'



const ItemListContainer = ({saludo}) => {
  const onAdd = (cantidad) => {
    console.log(`La cantidad es: ${cantidad}`)
  }
 
  return (
    <>
        {saludo}
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer