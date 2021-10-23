import React, {Component} from 'react';

import './TodoList.css';
import { Footer } from './Footer';

import TodoItems from './TodoItems';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/,"")
            };

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            };
        });

        this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return(item.key !== key);
        });
        this.setState({
            items:filteredItems
        });
    }
    render() {
        return (
            <div className="list-main">
                <div className="header">
                <svg className="animate__animated animate__fadeInDown" xmlns="http://www.w3.org/2000/svg" width="111" height="57" viewBox="0 0 222 115">
                    <g id="Group_3" data-name="Group 3" transform="translate(-32 -19)">
                        <text id="Too_Doo" data-name="Too
                        Doo" transform="translate(159 66)" fill="#fff" font-size="48" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="0">Too</tspan><tspan x="0" y="58">Doo</tspan></text>
                        <g id="Group_1" data-name="Group 1">
                        <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(32 20)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="10">
                    <rect width="113" height="113" stroke="none"/>
                    <rect x="5" y="5" width="103" height="103" fill="none"/>
                    </g>
                <rect id="Rectangle_2" data-name="Rectangle 2" width="60" height="14" transform="translate(52 42)" fill="#fff"/>
                <rect id="Rectangle_3" data-name="Rectangle 3" width="51" height="16" transform="translate(52 69)" fill="#fff"/>
                <rect id="Rectangle_4" data-name="Rectangle 4" width="41" height="16" transform="translate(51 98)" fill="#fff"/>
                    </g>
                </g>
                </svg>

                    <form onSubmit={this.addItem} className="animate__animated animate__fadeInUp">
                        <input ref={(a) => this._inputElement = a} placeholder="Enter your task..."></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
                <Footer />
            </div>
        );
    }
}

export default TodoList;