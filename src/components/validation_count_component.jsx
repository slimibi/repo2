import React, { Component } from "react";

class ValidationCountComponent extends Component {
  state = {};
  render() {
    return (
      <div className="row" style={rowStyle}>
        <div className="col-8" style={col8Style}>
          {this.props.name}
        </div>
        <div className="col-4 text-center" style={col4Style}>
          {this.props.count}
        </div>
      </div>
    );
  }
}

const rowStyle = {
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#9e661d",
  marginLeft: "5px",
  marginRight: "5px"
};

const col4Style = {
  backgroundColor: "#9e661d",
  color: "white",
  fontWeight: "500",
  paddingTop: "10px",
  paddingBottom: "10px"
};

const col8Style = {
  fontWeight: "500",
  paddingTop: "10px",
  paddingBottom: "10px"
};

export default ValidationCountComponent;
