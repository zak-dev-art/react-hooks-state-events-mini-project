import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>
  ));

  return <div className="categories">{categoryButtons}</div>;
}

export default CategoryFilter;
