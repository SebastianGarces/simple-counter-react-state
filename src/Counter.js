import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment() {
		this.setState(
			(state, props) => {
				const { max, step } = props;
				if (state.count >= max) return;
				return { count: state.count + step };
			},
			() => console.log('After!', this.state),
		);
		console.log('Before!', this.state);
	}

	decrement() {
		this.setState(state => {
			return { count: state.count - 1 };
		});
	}

	reset() {
		this.setState(state => {
			return { count: 0 };
		});
	}

	render() {
		const { count } = this.state;

		return (
			<div className="Counter">
				<p className="count">{count}</p>
				<section className="controls">
					<button onClick={this.increment}>Increment</button>
					<button onClick={this.decrement}>Decrement</button>
					<button onClick={this.reset}>Reset</button>
				</section>
			</div>
		);
	}
}

export default Counter;
