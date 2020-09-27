import React, { Component } from 'react';
import {NavMenu} from "./NavMenu"

export class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null
		}
	}

  render () {
    return (
        <div>
            <NavMenu/>
            <h1>Список текущих активных заданий</h1>
            <h1>Список исполненных заданий</h1>
      </div>
    );
  }
}
