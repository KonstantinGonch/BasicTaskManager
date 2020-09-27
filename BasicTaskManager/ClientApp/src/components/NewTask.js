import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { NavMenu } from './NavMenu';

import "react-datepicker/dist/react-datepicker.css";
import './Auth.css';

import axios from 'axios';

export class NewTask extends Component {

	constructor(props) {
		super(props);
		this.state = {
			task: {
				ShortDescription: "",
				FullDescription: "",
				Deadline: "",
			}
		}

		this.onShortDescriptionChange = this.onShortDescriptionChange.bind(this);
		this.onFullDescriptionChange = this.onFullDescriptionChange.bind(this);
		this.changeTaskDate = this.changeTaskDate.bind(this);
		this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
	}

	onShortDescriptionChange(e) {
		let newState = Object.assign({}, this.state);
		newState.task.ShortDescription = e.target.value;
		this.setState(newState);
	}

	onFullDescriptionChange(e) {
		let newState = Object.assign({}, this.state);
		newState.task.FullDescription = e.target.value;
		this.setState(newState);
	}

	changeTaskDate(date) {
		let newState = Object.assign({}, this.state);
		newState.task.Deadline = date;
		this.setState(newState);
	}

	async onSubmitButtonClick(e) {
		e.preventDefault();

		let authKey = localStorage.getItem("authKey");
		if (authKey) {
			let model = {
				UserToken: authKey,
				Task: this.state.task
			}
			let response = await axios.post("task/addtask", model);
			if (response && response.data) {

			}
			else {

			}
		}
	}

	render() {
		return (
			<div>
				<NavMenu/>
				<div class="main">
					<div class="sidenav">
						<div class="login-main-text">
							<h2>Заполните информацию</h2>
						</div>
					</div>
					<div class="col-md-6 col-sm-12">
						<div class="login-form">
							<form>
								<div class="form-group">
									<label>Название</label>
									<input type="text" class="form-control" placeholder="Название" value={this.state.task.ShortDescription} onChange={this.onShortDescriptionChange} />
								</div>
								<div class="form-group">
									<label>Описание</label>
									<input type="text" class="form-control" placeholder="Описание" value={this.state.task.FullDescription} onChange={this.onFullDescriptionChange} />
								</div>
								<div class="form-group">
									<label>Дата исполнения</label>
									<DatePicker onChange={date => this.changeTaskDate(date)} selected={this.state.task.Deadline} />
								</div>
								<button type="submit" class="btn btn-primary" onClick={this.onSubmitButtonClick}>Создать задачу</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}