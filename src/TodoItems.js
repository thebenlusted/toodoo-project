import React, { Component } from 'react';


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return  (
            <div id="list-item">
                <h3 className="animate__animated animate__fadeIn">{item.time}</h3>
            <li onClick={() => this.delete(item.key)} key={item.key} className="animate__animated animate__fadeIn">{item.text}</li>
            </div>
        );
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;