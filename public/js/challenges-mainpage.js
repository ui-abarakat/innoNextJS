


const getHeroChallenges = () => {
  getChallenges().then((challenges) => {
    // check if hero is true
    challenges = challenges.filter((challenge) => challenge.hero === true);
    challenges = challenges.slice(0, 3);
    // Hero Challenges


    challenges.forEach((heroSlide) => {

      // Main Hero Carowsel
      let heroCard = document.createElement("div");
      heroCard.classList.add("carousel-item");
      heroCard.innerHTML = `
                <div class="inno-slider-i">
                  <div class="inno-slider-img">
                    <img src="${heroSlide.cover}" alt="..." />
                  </div>
                  <div class="inno-slider-c">
                    <span>${heroSlide.category}</span>
                    <h1 class="inno-black">${heroSlide.title}</h1>
                    <p>${heroSlide.description}</p>
                    <a href="challenge-details.html" class="inno-btn inno-btn-primary">تفاصيل التحدي</a>
                  </div>
                </div>`;
      mainHero.appendChild(heroCard);
      // add a new slide to the carousel
      let carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      carouselItem.innerHTML = `
                <div class="inno-slider-i">
                  <div class="inno-slider-img">
                    <img src="assets/img/slider-idea.png" alt="..." />
                  </div>
                  <div class="inno-slider-c">
                    <span>منصة إدارة الإبتكار</span>
                    <h1 class="inno-black">شارك فكرتك</h1>
                    <p>نُقدِّر جميع الإدخالات. حتى الأفكار غير المكتملة قد تكون مفيدة للمناقشة وتساعد في توليد الأفكار. ساعدنا في التطور عن طريق إرسال أفكارك الخاصة إلى هذه الحملة.
                    </p>
                    <button onclick="openPopup()" class="inno-btn inno-btn-primary">شارك الآن </button>
                  </div>
                </div>
                          `;
      mainHero.appendChild(carouselItem);
      // add active class to the first slide

      if (heroCard === mainHero.children[0]) {
        heroCard.classList.add("active");
      }

    });

  });

};
const getAllChallenges = () => {

  getChallenges().then((challenges) => {

    challenges.forEach((challenge) => {
      challenge.remainingTime = calculateRemainingTime(challenge.endDate, challenge.endTime);
      challenge.remainingDays = Math.floor(challenge.remainingTime / 24);
      challenge.remainingHours = Math.floor(challenge.remainingTime % 24);
      challenge.duration = calculateDuration(challenge.startDate, challenge.startTime, challenge.endDate, challenge.endTime);
      challenge.durationToStart = calculateDuration(currentFullDate, currentTime, challenge.startDate, challenge.startTime);
      challenge.progress = calculateProgress(challenge.duration, challenge.remainingTime);
      if (challenge.durationToStart > 0) {
        challenge.progress = 0;

      }

      // set progress bar color based on remaining time
      let barColor = "primary";
      if (challenge.progress >= 100) {
        challenge.barColor = "success";
      } else if (challenge.progress >= 99 || challenge.progress > 85) {
        challenge.barColor = "danger";
      } else if (challenge.progress <= 85 && challenge.progress > 50) {
        challenge.barColor = "warning";
      } else if (challenge.progress <= 50 && challenge.progress > 25) {
        challenge.barColor = "primary-dark";
      } else if (challenge.progress <= 25 && challenge.progress > 15) {
        challenge.barColor = "primary";
      } else if (challenge.progress < 15) {
        challenge.barColor = "inno-not-started gray";
      }

      // set progress bar text based on remaining time
      switch (true) {
        case challenge.remainingDays < 0:
          challenge.remainingTime = "مكتمل";
          break;
        case challenge.remainingDays === 0 && challenge.remainingDays < 1:
          if (challenge.remainingHours <= 10) {
            challenge.remainingTime = `0${challenge.remainingHours} ساعات`;
          } else {
            challenge.remainingTime = `${challenge.remainingHours} ساعة`;
          }
          break;
        case challenge.remainingDays === 1:
          challenge.remainingTime = `${challenge.remainingDays} يوم`;
          break;
        case challenge.remainingDays === 2:
          challenge.remainingTime = `${challenge.remainingDays} يومان`;
          break;
        case challenge.remainingDays > 2 && challenge.remainingDays < 11:
          challenge.remainingTime = `${challenge.remainingDays} أيام`;
          break;
        case challenge.durationToStart > 0:
          challenge.remainingTime = `لم يبدأ`;
          challenge.progress = 0;
          break;
        default:
          challenge.remainingTime = `${challenge.remainingDays} يوم`;
          break;

      }

    });

    challenges = challenges.slice(0, 3);
    // Main Challenges
    challenges.forEach((challenge) => {
      let challengeCard = document.createElement("div");
      challengeCard.classList.add("col-12", "col-md-4", "col-lg-4");
      challengeCard.innerHTML = `
    <div class="inno-challenges">
  <div class="inno-challenge-img">
    <img src="${challenge.cover}" alt="..." />
  </div>
  <div class="progress">
  
    <div class="progress-bar ${challenge.barColor}-bg" role="progressbar" style="width: ${challenge.progress}%" aria-valuenow="${challenge.progress}" aria-valuemin="0" aria-valuemax="100">
    <span class="sr-only">${challenge.remainingTime}</span>
    </div>
  </div>
  <div class="inno-challenge-c">
    <div class="inno-challenge-top">
      <div class="inno-challenge-dep">
        <i class="inb in-bookmark"></i>
        <span>${challenge.startDate}</span>
      </div>
      <div class="inno-challenge-date">
        <i class="inb in-calendar"></i>
        <span>${challenge.endDate}</span>
      </div>
    </div>
    <h3 class="inno-challenge-title">${challenge.title}</h3>
    <p class="inno-challenge-description">${challenge.description}</p>
    <a href="challenge-details.html" class="inno-btn inno-btn-primary">تفاصيل التحدي</a>
  </div>
</div>
  `;
      mainChallenges.appendChild(challengeCard);
    });

  });
};
