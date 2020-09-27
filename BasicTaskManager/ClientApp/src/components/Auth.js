import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios';


export class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				Login: "",
				Password: ""
			}
		}

		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onEnterClick = this.onEnterClick.bind(this);
	}

	componentDidMount() {

		let authKey = localStorage.getItem("authKey");

		axios.get("/user/istokenactive?token=" + authKey)
			.then((result) => {
				if (result && result.data) {
					window.open("/tasklist","_self");
				}
			});
	}

	async onEnterClick(e) {
		e.preventDefault();
		let res = await axios.get("/user/authorize?password=" + this.state.user.Password + "&login=" + this.state.user.Login);

		if (res && res.data) {
			localStorage.setItem("authKey", res.data.key);

			window.open("/tasklist", "_self");
		}
	}

	onLoginChange(e) {
		let newState = Object.assign({}, this.state);
		newState.user.Login = e.target.value;
		this.setState(newState);
	}

	onPasswordChange(e) {
		let newState = Object.assign({}, this.state);
		newState.user.Password = e.target.value;
		this.setState(newState);
	}

	onRegisterClick(e) {
		e.preventDefault();
		window.open("/register", "_self");
	}

	render() {
		return (
			<div>
				<div class="sidenav">
					<div class="login-main-text">
						<h2>Вход<br /> в систему</h2>
						<p>Войдите или зарегистрируйтесь</p>
					</div>
				</div>
				<div class="main">
					<div class="col-md-6 col-sm-12">
						<div class="login-form">
							<form>
								<div class="form-group">
									<label>Логин</label>
									<input type="text" class="form-control" placeholder="Логин" value={this.state.user.Login} onChange={this.onLoginChange} />
								</div>
								<div class="form-group">
									<label>Пароль</label>
									<input type="password" class="form-control" placeholder="Пароль" value={this.state.user.Password} onChange={this.onPasswordChange} />
								</div>
								<button type="submit" class="btn btn-black" onClick={this.onEnterClick}>Вход</button>
								<button type="submit" class="btn btn-secondary" onClick={this.onRegisterClick}>Регистрация</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}