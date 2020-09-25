import React, { Component } from 'react';
import './Auth.css';

export class Auth extends Component {

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
									<input type="text" class="form-control" placeholder="Логин" />
								</div>
								<div class="form-group">
									<label>Пароль</label>
									<input type="password" class="form-control" placeholder="Пароль" />
								</div>
								<button type="submit" class="btn btn-black">Вход</button>
								<button type="submit" class="btn btn-secondary">Регистрация</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}