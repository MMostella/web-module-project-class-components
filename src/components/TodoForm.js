import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
        this.setState({
            ...this.state,
            input: ''
        })
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    name='item'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>
                    Add
                </button>
            </form>
        )
    }
}

export default TodoForm;