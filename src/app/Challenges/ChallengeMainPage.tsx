import Image from "next/image";
import Style from "./ChallengeMainPage.module.scss";
import { challenges } from "../../utils/data";
import Button from "../../components/MainLayouts/Button/Button";

export default function ChallengeMainPage() {
  // calculate remaining days
  challenges.map((challenge) => {
    let cuurentDate = new Date();
    let startDate = new Date(challenge.startDate);
    let endDate = new Date(challenge.endDate);
    let remainingDays = Math.floor(Number(endDate - cuurentDate) / (1000 * 60 * 60 * 24));
    let duration = Math.floor(Number(endDate - startDate) / (1000 * 60 * 60 * 24));
    challenge.duration = duration;
    challenge.remainingDays = remainingDays;
    let progress = duration - remainingDays;
    challenge.progress = progress;
    let progressPercentage = (progress / duration) * 100;
    challenge.progressPercentage = progressPercentage;

    if (progressPercentage < 0) {
      challenge.progressPercentage = 0;
    }
    if (progressPercentage > 100) {
      challenge.progressPercentage = 100;
    }

    if (remainingDays < 0) {
      challenge.remainingDays = "مكتمل";
    }
    if (remainingDays === 0) {
      challenge.remainingDays = "ينتهي اليوم";
    }
    if (remainingDays <= 1 && remainingDays > 0) {
      challenge.remainingDays = "متبقي يوم";
    }
    if (remainingDays <= 2 && remainingDays > 1) {
      challenge.remainingDays = "متبقي يومان";
    }
    if (remainingDays > 2 && remainingDays <= 10) {
      challenge.remainingDays = ` ${remainingDays} أيام`;
    }
    if (remainingDays > 10) {
      challenge.remainingDays = ` ${remainingDays} يوم`;
    }
    if (cuurentDate < startDate) {
      challenge.remainingDays = "لم يبدأ";
      challenge.progressPercentage = 0;
    }

    let progressColor: string = "";
    if (progressPercentage <= 0) {
      progressColor = "gray-bg inno-not-started";
    }
    if (progressPercentage < 25 && progressPercentage > 0) {
      progressColor = "info-bg";
    }
    if (progressPercentage >= 25 && progressPercentage < 50) {
      progressColor = "primary-bg";
    }
    if (progressPercentage >= 50 && progressPercentage < 75) {
      progressColor = "warning-bg";
    }
    if (progressPercentage >= 75 && progressPercentage < 100) {
      progressColor = "danger-bg";
    }
    if (progressPercentage >= 100) {
      progressColor = "success-bg";
    }

    challenge.progressColor = progressColor;
    // Progress bar width
  });

  return (
    <section className={Style["inno-challenges-wp"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inno-title">
              <h2>اكتشف التحديات</h2>
              <span>نُقدِّر جميع الإدخالات. حتى الأفكار غير المكتملة قد تكون مفيدة للمناقشة وتساعد في توليد الأفكار. ساعدنا في التطور عن طريق إرسال أفكارك</span>
            </div>
          </div>
        </div>
        <div className="row">
          {challenges
            .slice(0, 3)
            .sort((a, b) => b.progressPercentage - a.progressPercentage)
            .map((challenge) => (
              <div className="col-md-4" key={challenge.id}>
                <div className={Style["inno-challenges"]}>
                  <div className={Style["inno-challenge-img"]}>
                    <Image src={challenge.cover} alt={challenge.title} width={100} height={50}></Image>
                  </div>

                  <div className={Style["progress"]}>
                    <div className={Style["progress-bar"] + " " + challenge.progressColor} role="progressbar" style={{ width: `${challenge.progressPercentage}%` }} aria-valuenow={challenge.progressPercentage} aria-valuemin={0} aria-valuemax={100}>
                      <span>{challenge.remainingDays}</span>
                    </div>
                  </div>
                  <div className={Style["inno-challenge-c"]}>
                    <div className={Style["inno-challenge-top"]}>
                      <div className={Style["inno-challenge-dep"]}>
                        <i className="inb in-bookmark"></i>
                        <span>{challenge.category}</span>
                      </div>
                      <div className={Style["inno-challenge-date"]}>
                        <i className="inb in-calendar"></i>
                        <span>{challenge.endDate}</span>
                      </div>
                    </div>
                    <h3 className={Style["inno-challenge-title"]}>{challenge.title}</h3>
                    <p className={Style["inno-challenge-description"]}>{challenge.description}</p>
                    <Button size="md" variant="primary">
                      تفاصيل التحدي
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="inno-all-btn">
          <Button size="lg" variant="primary-dark">
            اكتشف جميع التحديات
          </Button>
        </div>
      </div>
    </section>
  );
}
