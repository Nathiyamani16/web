import React from "react";
import MultiplePizzas from "../assets/image.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Ice cream has a long history in the United States, 
        dating back to the late 1700s. It has evolved over time, 
        from a luxury dessert for the wealthy to a beloved treat for people of all backgrounds. Today, ice cream remains a popular dessert in America, 
        with countless flavors and variations available.
        Overall, ice cream has a long and fascinating history in the United States,
        and it continues to be a beloved dessert for people of all ages and backgrounds.
         Whether you prefer classic flavors or more unique varieties, there's no denying the appeal of a cold, 
        creamy scoop of ice cream on a hot summer day.
        </p>
      </div>
    </div>
  );
}

export default About;