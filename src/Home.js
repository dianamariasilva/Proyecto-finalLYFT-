import React, {Component} from 'react';
import './esther.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return (
            <div id="fondoMovil" className="bodyback">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2000px-Lyft_logo.svg.png"></img>
                        </div>
                    </div>
                </div>
                <div className="container botones ">
                    <div className="row ">
                        <div className="col-md-12 ">
                            <a type="button" className="buttonMovil1">Log in</a>
                            <NavLink to={"/signup"}
		 	         className="btn btn-lyft btn-lg btn-block"
		 type="button"className="buttonMovil2">Sign up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
    
		// <div>
		// 	<NavLink to={"/signup"}
		// 	         className="btn btn-lyft btn-lg btn-block"
		// 	>
		// 		Sign Up
		// 	</NavLink>
		// </div>
	);
}

export default Home;