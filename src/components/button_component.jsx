import React, { Component } from "react";

class ButtonComponent extends Component {
  state = {};
  render() {
    
    return (
      <div>
        <button
          className="btn btn-warning"
          style={{ padding: "5px 28px" }}
          onClick={() => this.props.check_answer(this.props.answer)}
        >
                          <div id="ex1">
                </div>
          {this.props.answer}
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
