import React from "react";

export const RecipeCard = ({ recipe }) => {
  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <img src={recipe?.thumb} alt={recipe?.title} style={{ width: "100%" }} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          padding: "0.5em",
        }}
      >
        <h2>{recipe?.title}</h2>
      </div>
    </div>
  );
};
