import React, {Component} from 'react';
import './estherUp.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const SignUp = ({model}) => {
	return (
	<center>
    <div className="App">
        <header>
            <div className="row sign-up">
                <div className="col-md-12">
                    <div className="col-xs-3">
                        <NavLink to={"/home"}><span className="glyphicon glyphicon-chevron-left">{<back/>}</span></NavLink>
						{/* <NavLink to={"/signup-form"} className="btn btn-lyft btn-lg btn-block"> Next </NavLink> */}
                    </div>
                    <div className="col-md-9">
                        <h2 className="Sign1">Sign Up</h2>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h5>Join now for free ride credit</h5>
                </div>
            </div>
        </header>
        <section>
            <form>
                <div className="col-auto">
                    <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2 mb-sm-0">
                        <div className="input-group-addon">
                            <select
                                title="Select your surfboard"
                                className="selectpicker input-group-addon">
                                <option alt>
                                    PERÚ +51
                                </option>
                                <option>
                                    CHILE +56
                                </option>
                                <option>
                                    MEXICO +52
                                    </option>
                            </select>
                        </div>
                        <input
                            type="number"
                            name="numero"
                            className="form-control num"
                            placeholder={953281406}
                            required />
                    </div>
                    <h5>We'll send a text to verify your phone</h5>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Next</button>
                        <NavLink to={"/signup-form"} className="btn btn-lyft btn-lg btn-block"> Next </NavLink>
                    </div>
                </div>
            </form>
        </section>
    </div>
</center>
		// <div>
		// 		<nav className="navbar navbar-light text-center">
		// 			<a href="javascript:window.history.back();">
		// 				<i
		// 					className="fa fa-angle-left fa-3x"
		// 					aria-hidden="true"/>
		// 			</a>
		// 			<div className="navbar-brand">
		// 				<h3>
		// 					Sign Up
		// 				</h3>
		// 			</div>
		// 		</nav>
		// 	<NavLink to={"/signup-form"}
		// 	         className="btn btn-lyft btn-lg btn-block">
		// 		Next
		// 	</NavLink>
		// </div>
	);
}

export default SignUp;