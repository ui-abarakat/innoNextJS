
// Ideas data
let ideasArray = [
  {
    id: 1,
    cover: "assets/img/ideas/idea-01.png",
    title: " استخدام تقنية الدرونز داخل مواقف الوزارة.",
    description: "تبني تقنيات حديثة ومنها تقنية الدرونز داخل مواقف السيارات لتقليل الاستهلاك البيئي وتعزيز مهام المراقبة والأمان.",
    button: "اقرأ المزيد",
    submitDate: "2024-04-22",
    submitTime: "00:00",
    likes: 215,
    comments: 159,
    views: 361,
    category: "التقنية",
    result: "reviewing",
    author:
    {
      name: "متعب سعد  الشعيفي ",
      username: "mshaifi",
      avatar: "https://intranet.mcit.gov.sa/NewPortal/EmployeeImages/mshaifi.jpg",
      title: "مدير قسم تطوير الأعمال والابتكار",
      points: 512,
      gender: "male"
    },
    attachments:
      [
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.pdf",
        },
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.ppt",
        },
        {
          title: "ملخص الفكرة مرئي",
          link: "assets/attachments/idea.mp4",
        }
      ],
  },
  {
    id: 2,
    cover: "assets/img/ideas/idea-02.png",
    title: "البحث عن وسائل بديلة لترشيد استهلاك الطاقه ",
    description: "ترشيد استهلاك الطاقة باستخدام وسائل مثل حساسات الطاقة ومراوح التهوية لجمع وتحليل البيانات لتسهيل اتخاذ القرارات .",
    button: "اقرأ المزيد",
    submitDate: "2024-05-09",
    submitTime: "00:00",
    likes: 65,
    comments: 19,
    views: 149,
    category: "الاقتصاد الرقمي",
    result: "approved",
    author:
    {
      name: "رنده محمد الحماد",
      username: "rhammad",
      avatar: "",
      title: "مدير مشاريع",
      points: 235,
      gender: "female"
    },
    attachments:
      [
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.pdf",
        },
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.ppt",
        },
        {
          title: "ملخص الفكرة مرئي",
          link: "assets/attachments/idea.mp4",
        }
      ],
  },
  {
    id: 3,
    cover: "assets/img/ideas/idea-03.png",
    title: "تقديم تجربة لمرضى ما بعد الجلطة الدماغية . ",
    description: "تقديم تجربة لمرضى ما بعد الجلطة الدماغية . ",
    button: "اقرأ المزيد",
    submitDate: "2024-04-06",
    submitTime: "00:00",
    likes: 188,
    comments: 144,
    views: 289,
    category: "الصحة",
    result: "best",
    author:
    {
      name: "حنان مكي زكري",
      username: "hzakari_p",
      avatar: "",
      title: "مدير برنامج",
      points: 0,
      gender: "female"
    },
    attachments:
      [
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.pdf",
        },
        {
          title: "ملخص الفكرة مكتوب",
          link: "assets/attachments/idea.ppt",
        },
        {
          title: "ملخص الفكرة مرئي",
          link: "assets/attachments/idea.mp4",
        }
      ],
  }

];




// colclate idea days function
function calculateIdeaDays(submitDate) {
  let submit = new Date(submitDate);
  let days = (currentDate - submit) / 36e5;
  let ideaDays = Math.floor(days / 24);
  return ideaDays;
}
let ideas = ideasArray.filter((idea) => idea.result !== "rejected");
const getAllIdeas = () => {
  // loop through ideas array and calculate days for each idea
  ideas.forEach((idea) => {
    let ideaDays = calculateIdeaDays(idea.submitDate);
    if (ideaDays <= 10 && ideaDays > 2) {
      idea.submitDate = "منذ " + ideaDays + " أيام";
    } else if (ideaDays <= 0) {
      idea.submitDate = "اليوم";
    } else if (ideaDays === 1) {
      idea.submitDate = "منذ أمس";
    } else if (ideaDays === 2) {
      idea.submitDate = "منذ يومين";
    } else {
      idea.submitDate = "منذ " + ideaDays + " يوم";
    }
  });
  // loop through ideas array and create a card for each idea
  let mainIdeas = document.getElementById("mainIdeas");
  for (let i = 0; i < 3; i++) {
    let idea = ideas[i];
    let ideaCard = document.createElement("div");
    ideaCard.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-4");
    ideaCard.innerHTML = `
<div class="inno-idea-i" style="background-image: url('${idea.cover}');">
            <a href="" class="inno-idea-user">
              <div class="inno-idea-user-img">
                <img src="${idea.author.avatar}" alt="${idea.author.name}" />
              </div>
              <div class="inno-idea-user-name">
                <h5>${idea.author.name}</h5>
                <span>${idea.author.title}  </span>
              </div>
            </a>
            <div class="inno-idea-c">
              <div class="inno-idea-category">
                <i class="inr in-bookmark"></i>
                <span>${idea.category}</span>
              </div>
              <h3>${idea.title}</h3>
              <div class="inno-idea-status">
                <div class="inno-idea-date">
                <i class="inr in-calendar"></i>
                  <span>${idea.submitDate}</span>
                </div>
                <div class="inno-idea-views">
                  <i class="inr in-eye"></i>
                  <span>${idea.views}</span>
                  </div>
                <div class="inno-idea-vote">
                  <i class="inr in-heart"></i>
                  <span id="likes">0</span>
                  </div>
                <div class="inno-idea-comment">
                  <i class="inr in-comment"></i>
                  <span>${idea.comments}</span>
                  </div>
              </div>
              <p>${idea.description}</p>
              <a class="inno-btn inno-btn-primary" href="idea-details.html">${idea.button}</a>
            </div>
            <button href="#" class="inno-btn inno-btn-like inno-btn-float-like">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 103.2 98.3">
                <path  class="white-fill" d="M101,59.2c0-2.2-.7-4.4-2.1-6.1,4.6-3.3,5.6-9.7,2.3-14.3-1.9-2.7-5-4.3-8.3-4.2h-23.3l3.2-11.2v-5.4C72.9,8,64.9,0,55,0c-2.4,0-4.3,1.9-4.3,4.3v11.9c-1.6,2.6-10.6,12.7-20.4,23.2v1h-6v-8H0v63.8h24.2v-8h6v4l8.4,3.1c5,1.9,10.2,2.8,15.5,2.8h32.2c5.7,0,10.2-4.6,10.2-10.2,0-2.2-.7-4.4-2-6.1,4.6-3.3,5.6-9.7,2.3-14.3,0,0,0-.1-.1-.2,2.7-1.9,4.2-5,4.2-8.3Z"/>
              </svg>
            </button>
          </div>`

    mainIdeas.appendChild(ideaCard);

    if (idea.author.avatar === "") {
      if (idea.author.gender === "male") {
        ideaCard.querySelector(".inno-idea-user-img").innerHTML = `<img src="https://intranet.mcit.gov.sa/Style%20Library/img/empimageshadow.gif" />`;
      }
      else if (idea.author.gender === "female") {
        ideaCard.querySelector(".inno-idea-user-img").innerHTML = `<img src="https://intranet.mcit.gov.sa/Style%20Library/img/woman.png" alt="User Name" />`;
      }
      else {
        ideaCard.querySelector(".inno-idea-user-img").style.display = "none";
      }

    }
    //  appind rejected tag
    if (idea.result === "rejected") {
      let rejectedTag = document.createElement("div");
      rejectedTag.classList.add("inno-idea-tag", "inno-idea-tag-rejected");
      rejectedTag.innerHTML = `<i class="inb in-info"></i><span>فكرة مرفوضة</span>`;
      ideaCard.querySelector(".inno-idea-i").appendChild(rejectedTag);
    }
    //  appind approved tag
    if (idea.result === "approved") {
      let approvedTag = document.createElement("div");
      approvedTag.classList.add("inno-idea-tag", "inno-idea-tag-approved");
      approvedTag.innerHTML = `<i class="inb in-check-circle"></i><span>فكرة مقبولة</span>`;
      ideaCard.querySelector(".inno-idea-i").appendChild(approvedTag);
    }
    // appind best tag
    if (idea.result === "best") {
      let bestTag = document.createElement("div");
      bestTag.classList.add("inno-idea-tag", "inno-idea-tag-best");
      bestTag.innerHTML = `<i class="inb in-star"></i><span>أفضل فكرة</span>`;
      ideaCard.querySelector(".inno-idea-i").appendChild(bestTag);
    }
    //  appind reviewing tag
    if (idea.result === "reviewing") {
      let reviewingTag = document.createElement("div");
      reviewingTag.classList.add("inno-idea-tag", "inno-idea-tag-reviewing");
      reviewingTag.innerHTML = `<i class="inb in-stopwatch"></i><span>تحت المراجعة</span>`;
      ideaCard.querySelector(".inno-idea-i").appendChild(reviewingTag);
    }
    // appind winner tag
    if (idea.result === "winner") {
      let winnerTag = document.createElement("div");
      winnerTag.classList.add("inno-idea-tag", "inno-idea-tag-winner");
      winnerTag.innerHTML = `<i class="inb in-trophy"></i><span>الفكرة الفائزة</span>`;
      ideaCard.querySelector(".inno-idea-i").appendChild(winnerTag);
    }



    // Ideas Likes toggle
    let likes = ideaCard.querySelector("#likes");
    let likeButton = ideaCard.querySelector(".inno-btn-float-like");
    let liked = false;
    likeButton.addEventListener("click", () => {
      liked = !liked;
      if (liked) {
        likes.textContent++;
        likeButton.classList.add("inno-liked");
      } else {
        likes.textContent--;
        likeButton.classList.remove("inno-liked");
      }
    });
  };

};


const getWinnerIdea = () => {
  // if idea result is rejected cut the idea from the array and create a new array whith out rejected ideas
  let theWinIdea = ideasArray.filter((idea) => idea.result === "winner");
  let winIdea = document.getElementById("winIdea");
  winIdea.innerHTML += `<div class="inno-idea-i" style="background-image: url('${theWinIdea[0].cover}');">
  <h4>${theWinIdea[0].title}</h4>
  <div class="inno-idea-user">
    <img src="${theWinIdea[0].author.avatar}" alt="${theWinIdea[0].username}" />
    <div class="inno-idea-author-i">
    <h5>${theWinIdea[0].author.name}</h5>
    <span>${theWinIdea[0].author.title}</span>

    </div>
    </div>
   <a class="inno-btn inno-btn-primary" href="idea-details.html">اقرأ المزيد</a>
  </div>`;
}


const getBestIdeas = () => {
  let theBestIdeas = ideasArray.filter((idea) => idea.result === "best");


  let bestIdeas = document.getElementById("bestIdeas");
  let ideaDescription = document.getElementById("ideaDescription");
  for (let i = 0; i < theBestIdeas.length; i++) {
    let bestIdea = theBestIdeas[i];
    let bestIdeaCard = document.createElement("div");
    bestIdeaCard.classList.add("col-12");
    bestIdeaCard.innerHTML += `
    <div class="inno-idea-i" style="background-image: url('${bestIdea.cover}');">
    <h4>${bestIdea.title}</h4>
    <div class="inno-idea-user">
      <img src="${bestIdea.author.avatar}" alt="${bestIdea.author.name}" />
      <div class="inno-idea-author-i">
      <h5>${bestIdea.author.name}</h5>
      <span>${bestIdea.author.title}</span>

      </div>
      </div>
     <a href="idea-details.html"  class="inno-btn inno-btn-primary">اقرأ المزيد</a>
    </div>
    
    `
    bestIdeas.appendChild(bestIdeaCard);
  }
}

const getIdeaDetails = () => {
  let ideaDetailsPage = ideasArray[0];
  let ideaDetailsBrdcrmp = document.getElementById("ideaDetailsBrdcrmp");
  ideaDetailsBrdcrmp.style.backgroundImage = `url(${ideaDetailsPage.cover})`;
  ideaDetailsBrdcrmp.innerHTML += `
  <div class="container">
  <div class="row">
    <div class="col-12">
      <div class="inno-breadcramp-c">
        <h1 class="inno-idea-description-header-title">${ideaDetailsPage.title}</h1>
        <nav class="inno-breadcramp">
          <ul>
            <li>
              <a href="index.html"><i class="inr in-home"></i></a>
            </li>
            <li>
              <a href="all-ideas.html">الأفكار</a>
            </li>
            <li>${ideaDetailsPage.title}</li>
          </ul>
        </nav>
      </div>
      </div>
    </div>
  </div>
  `
  let ideaDetails = document.getElementById("ideaDetails");
  ideaDetails.innerHTML += `
  <div class="container">
  <div class="row">
    <div class="col-12 col-md-9">
      <div class="inno-idea-description-c">
        <img src="${ideaDetailsPage.cover}" alt="" />
        <div class="inno-idea-status">
          <div class="inno-idea-category">
            <i class="inr in-bookmark"></i>
            <span>${ideaDetailsPage.category}</span>
          </div>
          <div class="inno-idea-date">
            <i class="inr in-calendar"></i>
            <span>${ideaDetailsPage.submitDate}</span>
          </div>
          <div class="inno-idea-views">
            <i class="inr in-eye"></i>
            <span>${ideaDetailsPage.views}</span>
          </div>
          <div class="inno-idea-vote">
            <i class="inr in-heart"></i>
            <span id="likes">${ideaDetailsPage.likes}</span>
          </div>
          <div class="inno-idea-comment">
            <i class="inr in-comment"></i>
            <span>${ideaDetailsPage.comments}</span>
          </div>
          <div class="inno-idea-like">
            <button class="inno-btn inno-btn-like">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 103.2 98.3">
                <path class="white-fill" d="M101,59.2c0-2.2-.7-4.4-2.1-6.1,4.6-3.3,5.6-9.7,2.3-14.3-1.9-2.7-5-4.3-8.3-4.2h-23.3l3.2-11.2v-5.4C72.9,8,64.9,0,55,0c-2.4,0-4.3,1.9-4.3,4.3v11.9c-1.6,2.6-10.6,12.7-20.4,23.2v1h-6v-8H0v63.8h24.2v-8h6v4l8.4,3.1c5,1.9,10.2,2.8,15.5,2.8h32.2c5.7,0,10.2-4.6,10.2-10.2,0-2.2-.7-4.4-2-6.1,4.6-3.3,5.6-9.7,2.3-14.3,0,0,0-.1-.1-.2,2.7-1.9,4.2-5,4.2-8.3Z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="inno-idea-description-p">
        <p>${ideaDetailsPage.description}</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3">
      <div class="inno-card">
        <div class="inno-tags">
          <div class="inno-tag inno-tag-primary">مالك الفكرة</div>
        </div>
        <div class="inno-card-body">
          <div class="inno-user-card">
            <img src="${ideaDetailsPage.author.avatar}" alt="User Image" />
            <h4 class="inno-user-name">${ideaDetailsPage.author.name}</h4>
            <p>${ideaDetailsPage.author.title}</p>
            <a href="mailto:" class="inno-user-email">${ideaDetailsPage.author.username}@mcit.gov.sa</a>
            <div class="inno-user-points">
              <span>${ideaDetailsPage.author.points}</span>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#"> الملف الشخصي</a>
                </li>
                <li>
                  <a href="#">محفظة الأفكار </a>
                </li>
                <li>
                  <a href="#"> أرسال رسالة </a>
                </li>
                <li>
                  <a href="#"> ميكروسوفت تيمز</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="inno-card">
        <div class="inno-card-body">
          <a class="inno-attachment" href=">${ideaDetailsPage.attachments[0].link}">
            <img src="assets/img/extensions/ppt.svg" alt="" />
            <div class="inno-attachment-details">
              <h6 class="inno-file-name">${ideaDetailsPage.attachments[0].title}</h6>
              <p><span>17MB</span>|<span>PPT</span></p>
            </div>
          </a>
        </div>
      </div>
      <div class="inno-card">
        <div class="inno-card-body">
        <a class="inno-attachment" href=">${ideaDetailsPage.attachments[1].link}">
        <img src="assets/img/extensions/doc.svg" alt="" />
            <div class="inno-attachment-details">
            <h6 class="inno-file-name">${ideaDetailsPage.attachments[1].title}</h6>
            <p><span>2MB</span>|<span>DOCX</span></p>
            </div>
          </a>
        </div>
      </div>
      <div class="inno-card">
        <div class="inno-card-body">
        <a class="inno-attachment" href=">${ideaDetailsPage.attachments[2].link}">
            <img src="assets/img/extensions/mp4.svg" alt="" />
            <div class="inno-attachment-details">
            <h6 class="inno-file-name">${ideaDetailsPage.attachments[2].title}</h6>
            <p><span>215MB</span>|<span>MP4</span></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  `
}
