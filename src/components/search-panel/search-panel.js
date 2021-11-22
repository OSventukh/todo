import React from "react";

import './search-panel.css';



export default class SearchPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onChangeValue = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchValue(term);
    }

render() {
    return <input type="text"
    className="form-control search-input"
    placeholder="search"
    value={this.state.term}
    onChange={this.onChangeValue}/>

}
}

