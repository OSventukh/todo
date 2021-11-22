import React from "react";

import './todo-list-item.css'

export default class TodoListItem extends React.Component {
    constructor({label, onDeleted, onDone, onImportant}) {
        super();
        this.label = label;
        this.onDeleted = onDeleted;
        this.onDone = onDone;
        this.onImportant = onImportant;
    }

    render() {
        const {done, important} = this.props;
        

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" 
                    
                      onClick={this.onDone}>{this.label}</span>
                <div>
                    
                    <button type="button"
                            className="btn btn-outline-success btn-sm float-right"
                            onClick={this.onImportant}>
                        <i className="bi bi-exclamation-lg"/>
                    </button>
        
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={this.onDeleted}>
                        <i className="bi bi-trash-fill"/>
                    </button>
                </div>
                
            </span>
            );
    }
}