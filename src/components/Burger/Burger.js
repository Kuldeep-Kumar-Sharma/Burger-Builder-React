import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const Burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        );
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    });
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Plese select the a ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
