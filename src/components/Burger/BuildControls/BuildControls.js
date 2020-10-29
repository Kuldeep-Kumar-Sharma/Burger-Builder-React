import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>

      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.type}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.removeIngredientHandler(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button className="OrderButton" disabled={!props.purchaseable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
