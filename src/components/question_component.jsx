import React, { Component } from "react";

class QuestionComponent extends Component {
  state = {};
  render() {
    return (
      <div style={{ fontSize: "40px" }}>
        {this.props.question_1}
      </div>
    );
  }
}

export default QuestionComponent;
