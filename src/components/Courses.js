import React from "react";

const Courses = ({ courses }) => {
  return (
    <div className="section-center">
      {courses.map((course) => {
        const { id, title, price, desc, img } = course;
        return (
          <article className="menu-item" key={id}>
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <h4>{title}</h4>
              <h4 className="price">{price}</h4>
            </div>
            <p className="item-text">{desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Courses;
