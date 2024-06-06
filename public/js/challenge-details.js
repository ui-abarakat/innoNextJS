
let challengeDetails = document.querySelector("#challengeDetails");
// get frist 1 challenge 
getChallenges().then((challenges) => {
  let challengeInn = challenges[0];
  // console.log(challengeInn);
  challengeDetails.innerHTML = `
  <section class="inno-challenge-details-header" style="background-image: url('${challengeInn.cover}')">
        <div class="container">
          <div class="row">
          
          <div class="col-12 col-md-5">
              <nav class="inno-breadcramp">
                <ul>
                  <li><a href="index.html">الرئيسية</a></li>
                  <li><a href="all-challenges.html">التحديات</a></li>
                </ul>
              </nav>
              <div class="inno-challenge-h">
                <h1>${challengeInn.title}</h1>
                <button class="inno-btn inno-btn-primary" onclick="openPopup()">شارك فكرتك </button>
              </div>
            </div>
            <div class="col-12 col-md-7">
              <div class="inno-challenge-details-img">
                <img src="${challengeInn.cover}" alt="Challenge Image" />
              </div>
            </div>
          </div>
        </div>
        <div class="inno-challenge-btns">
          <button class="inno-btn inno-btn-light inno-btn-sm inno-active" data-target="challengeAbout">نظرة عامة</button>
          <button class="inno-btn inno-btn-light inno-btn-sm" data-target="challengeIdeas">الأفكـــــار <span>03</span></button>
          <button class="inno-btn inno-btn-light inno-btn-sm" data-target="challengeTeam">فريق التحدي</button>
          <button class="inno-btn inno-btn-light inno-btn-sm" data-target="challengeResult">نتائج التحدي</button>
        </div>
      </section>
      
  `;
  const challengeAbout = () => {
    let challengeAbout = document.querySelector("#challengeAbout");
    challengeAbout.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="inno-challenge-journey-wp">
              
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="inno-challenge-about-c">
              <div class="inno-title inno-title-start">
                <h3 class="">التحدي</h3>
              </div>
              <p>${challengeInn.description}</p>
              </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="inno-btns-wp mb-4">
              <button class="inno-btn inno-btn-primary w-100">متابعة التحدي</button>
              <button class="inno-btn inno-btn-primary"><i class="inb in-send"></i></button>
            </div>
            <div class="inno-card">
              <div class="inno-card-header">
                <h3 class="inno-card-title">مدير التحدي</h3>
              </div>
              <div class="inno-card-body">
                <div class="inno-user-card">
                <img src="${challengeInn.author.avatar}" alt="User Image" />
                <h4 class="inno-user-name">${challengeInn.author.name}</h4>
                <p></p>
                <a href="mailto:${challengeInn.author.username}@mcit.gov.sa">${challengeInn.author.username}@mcit.gov.sa</a>
              </div>
            </div>
          </div>
          <div class="inno-card">
            <div class="inno-card-header">
              <h3 class="inno-card-title">المرفقات </h3>
            </div>
            <div class="inno-card-body">

            
              <a class="inno-attachment">
                <img src="assets/img/extensions/pdf.svg" alt="" />
                <div class="inno-attachment-details">
                <h6 class="inno-file-name">اسم الملف المرفق يوضع هنا</h6>
                <p><span>215MB</span>|<span>PDF</span></p>
              </div>
            </a>
          
            
            <a class="inno-attachment">
              <img src="assets/img/extensions/zip.svg" alt="" />
              <div class="inno-attachment-details">
              <h6 class="inno-file-name">اسم الملف المرفق يوضع هنا</h6>
              <p><span>215MB</span>|<span>ZIP</span></p>
            </div>
          </a>
            
              </div>
        </div>
        </div>
      </div>
  `;
  };
  challengeAbout();

  const challengeJourney = () => {
    let challengeJourneis = document.querySelector(".inno-challenge-journey-wp");
    challengeInn.status.forEach((journeyStatus) => {
      challengeJourneis.innerHTML += `
      <div class="inno-challenge-journey-i inno-${journeyStatus.status}">
      <div class="inno-challenge-journey-icon"><i class="inb ${journeyStatus.icon}"></i></div>
      <p>${journeyStatus.name}<p/>
      <span class="inno-challenge-journey-date">${journeyStatus.endDate}</span>
      </div>
      `;
    }
    );
  };
  challengeJourney();
  const challengeManagers = () => {
    let managersTeam = document.querySelector("#managersTeam");
    challengeInn.managers.forEach((manager) => {
      managersTeam.innerHTML += `
      <div class="col-12 col-md-3">
    <div class="inno-card">
      <div class="inno-tags">
      <div class="inno-tag inno-tag-primary">${manager.roll}</div>
      </div>
      <div class="inno-card-body">
        <div class="inno-user-card">
          <img src="${manager.avatar}" alt="User Image" />
          <h4 class="inno-user-name">${manager.name}</h4>
          <p>${manager.title}</p>
          <a href="mailto:" class="inno-user-email"></a>
        </div>
      </div>
    </div>
  </div>`;
    }
    );
  }
  challengeManagers();
  const challengeReviewTeam = () => {
    let reviewTeam = document.querySelector("#reviewTeam");
    challengeInn.reviewers.forEach((reviewer) => {
      reviewTeam.innerHTML += `
    <div class="col-12 col-md-3">
    <div class="inno-card">
      <div class="inno-tags">
      <div class="inno-tag inno-tag-primary"></div>
      </div>
      <div class="inno-card-body">
        <div class="inno-user-card">
          <img src="${reviewer.avatar}" alt="User Image" />
          <h4 class="inno-user-name">${reviewer.name}</h4>
          <p>${reviewer.title}</p>
          <a href="mailto:" class="inno-user-email"></a>
        </div>
      </div>
    </div>
  </div>
    `
    }
    );
  }
  challengeReviewTeam();

  // challenge Tabs 
  // catch the buttons with the data-target
  let challengeTabsBtns = document.querySelectorAll(".inno-challenge-btns button");
  let challengeSections = document.querySelectorAll(".inno-challenge-sections section");
  challengeTabsBtns.forEach((tab) => {
    challengeSections.forEach((section) => {
      tab.addEventListener("click", (e) => {
        challengeTabsBtns.forEach((tab) => {
          tab.classList.remove("inno-active");
        });
        e.target.classList.add("inno-active");
        if (tab.dataset.target === section.id) {
          section.classList.add("inno-active");
        } else {
          section.classList.remove("inno-active");
        }
      });

    });
  });

});
