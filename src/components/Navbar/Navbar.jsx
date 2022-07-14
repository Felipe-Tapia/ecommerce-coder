import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css';



const Navbar = () => {
    
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white border border-info">
            <a className="navbar-brand" href="#">
                <img src="./logo.png" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Reservas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Entradas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Platos de fondo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Postres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Agregados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bebestibles</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    </>
    );
}



export default Navbar