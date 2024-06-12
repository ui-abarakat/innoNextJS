"use client";
import Image from "next/image";
import Style from "./Hero.module.scss";
import { challenges } from "../../utils/data";
import ideaSliderImage from "/public/img/slider-idea.png";
import Button from "../MainLayouts/Button/Button";
import ChallengeItem from "../../app/Challenges/ChallengeItem";
import { useState } from "react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % heroChallenges.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + heroChallenges.length) % heroChallenges.length);
  };

  const heroChallenges = challenges.filter((challenge) => challenge.hero);

  return (
    <section className={Style["inno-slider"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="mainPageCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {heroChallenges.map((challenge, index) => (
                  <ChallengeItem key={challenge.id} challenge={challenge} index={index} activeIndex={activeIndex} onActivate={setActiveIndex} />
                ))}
              </div>
              <div className={Style["inno-slider-arrows"]}>
                <button className={Style["inno-slider-prev"]} onClick={handlePrev} aria-label="Previous slide">
                  <span className="inr in-chevron-right" aria-hidden="true"></span>
                </button>
                <button className={Style["inno-slider-next"]} type="button" onClick={handleNext} aria-label="Next slide">
                  <span className="inr in-chevron-left" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
