"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Style from "./Hero.module.scss";
import { challenges } from "../../utils/data";
import ideaSliderImage from "/public/img/slider-idea.png";
import Button from "../MainLayouts/Button/Button";
import ChallengeItem from "../../app/Challenges/ChallengeItem";

export default function Hreo() {
  // convert challenges to array
  return (
    <section className={Style["inno-slider"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="mainPageCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {challenges.map((item) => {
                  if (item.hero) {
                    return <ChallengeItem key={item.id} challenge={item} />;
                  }
                })}
                <div className="carousel-item">
                  <div className={Style["inno-slider-i"]}>
                    <div className={Style["inno-slider-img"]}>
                      <Image src={ideaSliderImage} alt="شارك فكرتك" width={1600} height={900} />
                    </div>
                    <div className={Style["inno-slider-c"]}>
                      <span>منصة إدارة الإبتكار</span>
                      <h1 className="inno-black">شارك فكرتك</h1>
                      <p>نُقدِّر جميع الإدخالات. حتى الأفكار غير المكتملة قد تكون مفيدة للمناقشة وتساعد في توليد الأفكار. ساعدنا في التطور عن طريق إرسال أفكارك الخاصة إلى هذه الحملة.</p>

                      <Button size="md" variant="primary">
                        شارك الآن
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style["inno-slider-arrows"]}>
                <button className={Style["inno-slider-prev"]} type="button" data-bs-target="#mainPageCarousel" data-bs-slide="prev">
                  <span className="inr in-chevron-right" aria-hidden="true"></span>
                </button>
                <button className={Style["inno-slider-next"]} type="button" data-bs-target="#mainPageCarousel" data-bs-slide="next">
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
