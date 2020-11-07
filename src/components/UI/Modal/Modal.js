import React, { Component } from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxiliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  //Optimization render will happen only when there is a updation
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClose}
        ></Backdrop>
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
