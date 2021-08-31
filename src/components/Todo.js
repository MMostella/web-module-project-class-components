import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggle(props.item.id)
    }

    return (
        <div 
            onClick={handleClick}
            style={{textDecoration: props.item.complete ? 'line-through' : ''}}
            // className={`item${props.item.complete ? ' complete' : ''}`}
            key={props.item.id}
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;