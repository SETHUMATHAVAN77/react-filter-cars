import React, { useState } from "react";

import Categories from "./components/Categories";
import Courses from "./components/Courses";

import dataCars from "./data";

function App() {
  const [courses, setCourse] = useState(dataCars);

  const filterCourses = (category) => {
    if (category === "All") {
      setCourse(dataCars);
    } else {
      const updatedCourses = dataCars.filter(
        (course) => course.category === category
      );
      setCourse(updatedCourses);
    }
  };

  const categories = [
    "All",
    ...new Set(
      dataCars.map((course) => {
        return course.category;
      })
    ),
  ];

  // convert array to map to array

  // set will ignore repetition

  console.log(categories);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>LUXURY CARS</h2>
          <div className="underline"></div>
          <Categories filterCourses={filterCourses} categories={categories} />
          <Courses courses={courses} />
        </div>
      </section>
    </main>
  );
}

export default App;
