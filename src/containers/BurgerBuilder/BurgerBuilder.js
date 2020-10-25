import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 5,
      meat: 1,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
