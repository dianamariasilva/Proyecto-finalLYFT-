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
                    <div className="col-sm-2 col-xs-2 col-lg-2">
                        <NavLink to={"/home"}><span className="glyphicon glyphicon-chevron-left">{<back/>}</span></NavLink>
						{/* <NavLink to={"/signup-form"} className="btn btn-lyft btn-lg btn-block"> Next </NavLink> */}
                    </div>
                    <div className="navbar-brand text-center col-sm-10 col-xs-10 col-lg-10 title">
                        <h1 className="  title " id="titulo_2">Sign Up</h1>
                    </div>
                </div>
            </div>
                <div className="col-sm-12 title">
                    <h4>Join now for free ride credit</h4>
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

	);
}

export default SignUp;