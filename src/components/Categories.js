import React from "react";

const Categories = ({ filterCourses, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCourses(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

// manually
// <button
//   type="button"
//   className="filter-btn"
//   onClick={() => filterCourses("BMW")}
// >
//   BMW
// </button>

// automatically
// convert array to map to array

// set will ignore repetition
