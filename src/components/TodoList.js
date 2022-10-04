import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['study', 'code', 'videogames'],
        task: ''
    }

    handleChange = (e) => this.setState({ task: e.target.value });
    handleClick = () => this.setState(state => ({ items: [...state.items, state.task] }));


    render() {
        return (
            <>
                <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
                <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add task</button>
            </>
        )
    }
}