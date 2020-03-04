import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";

class ChildComponent extends React.Component {
	state = {
		value1: '',
	}

	change = e => {
		this.setState({ value1: e.target.value });
	}

	render() {
		return (
			<div className="first-component">
				<h2>Child component</h2>
				<input type="text" onChange={this.change} value={this.props.valueOfFirstElement}/>
			</div>
		)
	}
}

class ParentComponent extends React.Component {
  state = {
		value2: '',
  };

  change = e => {
		this.setState({ value2: e.target.value });
  };

  render() {
		return (
			<div className="some-class">
				<h2>Parent component</h2>
				<input type="text" onChange={this.change} />
				<ChildComponent valueOfFirstElement={this.state.value2} />
			</div>
		)
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"));
