import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {


	buttons = [
		{name: 'all', label: 'All'},
		{name: 'active', label: 'Active'},
		{name: 'done', label: 'Done'},
	];

	render() {
		const buttons = this.buttons.map(({name, label}) => {
			const isActive = this.props.filter === name;

			const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button type="button"
						className={`btn ${btnClass}`}
						onClick={() => this.props.onChangeFilter(name)}
						key={name}>
						
						{label}
				</button>
			);
		});
		return (
				<div className="btn-group">
					{buttons}
				</div>
			);
		}
}