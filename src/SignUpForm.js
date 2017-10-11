
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
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
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
						<div className="navbar-brand ">
							
							<h1 className="col-md-12 col-sm-12 titulo " id="titulo_2">Sing up</h1>					
							<h3 className="col-md-12 col-sm-12 titulo" id="subtitulo_2">Join now for free ride credit</h3>

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