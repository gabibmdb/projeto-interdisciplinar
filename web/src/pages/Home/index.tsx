import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/logo.png';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="BeauTree"/>
                </header>

                <main>
                    <h1>Um espaço <br /> destinado à beleza </h1>
                    <p>Ajudamos clientes e maquiadores a atenderem suas necessidades de forma personalizada!</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong> Comece já e faça seu cadastro </strong>
                    </Link>
                    
                    {/* <div id="bg-img">
                        <img src='../../assets/home-background.png' alt="Makeup"/>
                    </div> */}
                    
                </main>
            </div>
        </div>
        
    )
}

export default Home;