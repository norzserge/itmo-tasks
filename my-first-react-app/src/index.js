import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ChildComponent extends React.Component {
  render() {
    return (
      <div className="child-component">
        <h3>Child component</h3>
        <input
          type="text"
          value={this.props.parentValue}
          onChange={this.props.changeProp}
        />
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  state = {
    value: ""
  };

  change = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="parent-component">
        <h3>Parent component</h3>
        <input type="text" onChange={this.change} value={this.state.value} />
        <ChildComponent changeProp={this.change} parentValue={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"));
