import React from "react";

import './add-item.css';

export default class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            label: ''
        }
    }
    onChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form className="add-item" onSubmit={this.onSubmit}>
                <input type="text" 
                       placeholder="Що відбувається?"
                       className="form-control"
                       onChange={this.onChange} 
                       value={this.state.label}/>
                <button type="submit" 
                        className="btn btn-info"
                        >Добавити справу</button>
            </form>
        )
    }
}

