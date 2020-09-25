import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios';

export class Registration extends Component {

	async onSubmitButtonClick(e) {
		e.preventDefault();

		let res = await axios.post('/user/registeruser', this.state.user);

		if (res) {
			if (res.Id > 0) {

			}
			else {

			}
		}
	}

	onNickNameChange(e) {
		let newState = Object.assign({}, this.state);
		newState.user.NickName = e.target.value;
		this.setState(newState);
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

	constructor(props) {
		super(props);
		this.state = {
			user: {
				NickName: "",
				Login: "",
				Password: ""
			}
		}

		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onNickNameChange = this.onNickNameChange.bind(this);
		this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
	}

	render() {
		return (
			<div>
				<div class="sidenav">
					<div class="login-main-text">
						<h2>Регистрация в системе</h2>
					</div>
				</div>
				<div class="main">
					<div class="col-md-6 col-sm-12">
						<div class="login-form">
							<form>
								<div class="form-group">
									<label>Никнейм</label>
									<input type="text" class="form-control" placeholder="Никнейм" value={this.state.user.NickName} onChange={this.onNickNameChange} />
								</div>
								<div class="form-group">
									<label>Логин</label>
									<input type="text" class="form-control" placeholder="Логин" value={this.state.user.Login} onChange={this.onLoginChange} />
								</div>
								<div class="form-group">
									<label>Пароль</label>
									<input type="password" class="form-control" placeholder="Пароль" value={this.state.user.Password} onChange={this.onPasswordChange} />
								</div>
								<button type="submit" class="btn btn-primary" onClick={this.onSubmitButtonClick}>Регистрация</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}