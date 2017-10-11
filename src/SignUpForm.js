
import React, {Component} from 'react';
import './eve.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
		}
	}

	render () {
		const {model} = this.props;
		console.log(model.userInfo.name);

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});

			if(model.userInfo.name==" "){
				alert("falta completar los campos")

			}	
			
		}

		return (
			<div>
				<header>
					<nav className="navbar navbar-light">
						<a href="javascript:window.history.back();">
							<i
								className="fa fa-angle-left fa-3x"
								aria-hidden="true" />
						</a>
						<div className="row">
						<div className="col-sm-2 col-xs-2 col-lg-2">
						<NavLink to="/signUp"><span className="glyphicon glyphicon-chevron-left" />{<back/>}</NavLink>
						</div>
						<div className="navbar-brand  col-sm-10 col-xs-10 col-lg-10">
							
							<h1 className="  titulo " id="titulo_2">Sing up</h1>					
							<h3 className=" titulo" id="subtitulo_2">Join now for free ride credit</h3>

						</div>
						</div>
						
					</nav>
				</header>

				<div className="form-box">
                    <form role="form" id="contact-form">                  
                        <div className="form-group">
                        <div id="nameError" className="sr-only" role="alert"></div>
                        <label for="form-name-field" className="sr-only">Name</label>
                            <div className="input-group">
                                <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span></div>
                                <input  class="form-control" type="text" placeholder="Name"/>
				            </div>
                        </div>
                        <div className="form-group">
                        <div id="emailError" className="sr-only" role="alert"></div>
                        <label for="form-email-field" className="sr-only">Email</label>
                            <div className="input-group">
                                <div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></div>
                                <input  class="form-control" placeholder="Email" type="email" id="myEmail" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
                            </div>
                        </div>
						</form>
					</div>

				<section className="container-fluid form text-center">
					<label className="form-check-label ">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>
			
					{
						this.state.goFordward ?
							<NavLink
							
							to={"/lyftmap"}
												
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button
							className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

					

				</section>
			</div>

		);
	}
}

export default SignUpForm;