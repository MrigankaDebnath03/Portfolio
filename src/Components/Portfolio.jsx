/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dev://Smith",
    description: "An opensource VS Code extension to be your intelligent coding assistant.",
    url: "https://github.com/MrigankaDebnath03/DEVSMITH",
  },
  {
    title: "Deought Forecasting System",
    description:
      "A Drought Prediction System via time series forecasting using SARIMA and XGBOOST and training it on a publicly available dataset of rainfall data in India from 1901-2015",
    url: "https://github.com/MrigankaDebnath03/Frosthacks_aquavengers",
  },
  {
    title: "Customer Care Management System",
    description:
      "An automated system for customer care, including transcription, speaker diarization, sentiment analysis, and satisfaction ratings.",
    url: "https://github.com/MrigankaDebnath03/SIH-Project",
  },
  {
    title: "ATS from zip",
    description:
      "A web app with ATS functionality for recruiters",
    url: "https://apiwebsite-2r9k.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
