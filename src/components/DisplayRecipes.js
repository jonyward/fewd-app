import React, { useState } from "react";
import Item from "./Item";
import { recipes } from "../data/data";
import FetchNutrition from "./FetchNutrition";

const DisplayRecipes = () => {

  return (
    <>
    <ul>
      {recipes.map((food) => {
        return (
            <div>
              <Item item={food} />
              <FetchNutrition query={food.name} />
            </div>
        );
      })}
    </ul>
    </>
  );
};
export default DisplayRecipes;
