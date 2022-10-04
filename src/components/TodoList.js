import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['study', 'code', 'videogames'],
        task: ''
    }

    handleChange = (e) => this.setState({ task: e.target.value });
    handleClick = () => this.setState(state => ({ items: [...state.items, state.task], task: '' }));
    handleReset = () => this.setState({ items: [], task: '' })
    deleteTask = (e) => this.setState(state => {
        const stateCopy = [...state.items];
        stateCopy.splice(e.target.value, 1);
        return { items: stateCopy };
    })

    render() {
        return (
            <>
                <ul>{this.props.render(this.state, this.deleteTask)}</ul>
                <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add task</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }
}