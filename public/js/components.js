let getHeader = () => {
  let mainHeader = document.getElementById("mainHeader");
  mainHeader.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col-12">
      <div class="inno-header-c">
        <a href="index.html" class="inno-logo">
          <img src="assets/img/logo/logo-white.png" alt="منصة إدارة الأفكار" />
        </a>
        <nav>
          <a href="javascript:void(0)" class="inno-menu-btn" id="mainMenuBtn"><i class="inr in-menu"></i></a>
  
          <ul id="mainMenu">
            <a href="javascript:void(0)" class="inno-menu-x" id="mainMenuClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="19.799" height="19.799" viewBox="0 0 19.799 19.799">
                <g id="Group_94" data-name="Group 94" transform="translate(-8910.601 -329.6)">
                  <rect id="Rectangle_366" data-name="Rectangle 366" width="25" height="3"
                    transform="translate(8910.601 347.278) rotate(-45)" />
                  <rect id="Rectangle_367" data-name="Rectangle 367" width="25" height="3"
                    transform="translate(8912.722 329.6) rotate(45)" />
                </g>
              </svg>
            </a>
            <li><a href="index.html"><i class="inr in-home"></i></a></li>
            <li><a href="all-challenges.html">التحديات</a></li>
            <li><a href="all-ideas.html">الأفكار</a></li>
            <li><a href="about.html">عن المنصة</a></li>
            <li><a href="methodology.html">المنهجية</a></li>
            <li><a href="terms-and-conditions.html">الشروط والأحكام</a></li>
            <li><a href="privacy-policy.html">سياسة الخصوصية</a></li>
            <li>
              <button class="inno-btn inno-btn-sm inno-btn-light" id="userDropBtn"><i class="inb in-user"></i></button>
              <div class="inno-nav-drop">
                      <div class="inno-user-card">
                        <img src="assets/img/profiles/profile-01.png" alt="User Image">
                        <h4 class="inno-user-name">جوانا عبدالوهاب السليمان</h4>
                        <p>مدير التسويق والعلاقات العامة</p>
                        <a href="mailto:" class="inno-user-email">jsuliman@mcit.gov.sa</a>
                        <div class="inno-user-points">
                          <span>2,457</span>
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
            </li>
            <li><button class="inno-btn inno-btn-sm inno-btn-primary"  onclick="openPopup()"> شارك فكرتك </button></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  </div>
`;
};
// sticky header whith smooth scroll
const stickyHeader = () => {
  let header = document.getElementById("mainHeader");
  let sticky = header.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset > sticky + 100 && window.pageYOffset <= 500) {
      header.classList.add("inno-sticky-perp");
    }
    else if (window.pageYOffset > 500) {
      header.classList.add("inno-sticky");
    } else {
      header.classList.remove("inno-sticky");
      header.classList.remove("inno-sticky-perp");
    }
  };
};


const getPageTitle = () => {
  let headerContent = document.querySelector(".inno-header-c");
  console.log(headerContent);
  let pathName = window.location.pathname;
  let pageName = pathName.split("/").pop();
  let pageTitle = pageName.split(".").shift();
  console.log(pathName);
  console.log(pageName);
  console.log(pageTitle);
  pageTitle !== "index" ? headerContent.classList.add("inno-inner-header") : null;

  let mainMenu = document.querySelector("#mainMenu");
  console.log(mainMenu);
};

// Drop Menu
const userDropMenu = () => {
  let userDropBtn = document.querySelector('#userDropBtn');
  let userDrop = document.querySelector('.inno-nav-drop');
  userDropBtn.addEventListener('click', (e) => {
    userDrop.classList.toggle('inno-active');
    userDropBtn.classList.toggle('inno-active');
    if (userDropBtn.classList.contains('inno-active')) userDropBtn.innerHTML = `<i class="inb in-times-square"></i>`;
    else
      userDropBtn.innerHTML = `<i class="inb in-user"></i>`;
  });
};

// Footer
const getFooter = () => {
  let mainFooter = document.getElementById("mainFooter");
  mainFooter.innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="inno-footer-c">  جميع الحقوق محفوظة © 2021 <a class="ms-2" href="https://www.mcit.gov.sa/" target="_blanck">وزارة الاتصالات وتقنية المعلومات</a></div>
      </div>
      <div class="col-12 col-md-6">
        <nav>
          <ul>
          <li><a href="about.html">عن المنصة</a></li>
          <li><a href="terms-and-conditions.html">الشروط والأحكام</a></li>
          <li><a href="privacy-policy.html">سياسة الخصوصية</a></li>
          </ul>
        </nav>
      </div>
 </div>
  </div>
`;
};


// get pagination
const getPagination = () => {
  let mainPagination = document.querySelector('.inno-pagination');
  mainPagination.innerHTML = `<ul>
  <li><a href=""><i class="inr in-chevron-right"></i></a></li>
  <li class="inno-pagination-current"><a href="">1</a></li>
  <li><a href="">2</a></li>
  <li><a class="inno-active" href="">3</a></li>
  <li><a href="">4</a></li>
  <li><a href="">..</a></li>
  <li><a href="">35</a></li>

  <li><a href=""><i class="inr in-chevron-left"></i></a></li>
</ul>`
};

// get sort 
const getSort = () => {
  let mainSort = document.querySelector('.inno-sort');
  mainSort.innerHTML = `<label for="">الترتيب حسب</label>
  <select name="" id="">
    <option value="">التاريخ من الأقدم للأحدث</option>
    <option value="">التاريخ من الأحدث للأقدم</option>
    <option value="">الأكثر تصويتاً</option>
  </select>`
};


// mobile menu
const mobileMenu = () => {
  const mainMenu = document.querySelector('#mainMenu');
  const mainMenuBtn = document.querySelector('#mainMenuBtn');
  const mainMenuClose = document.querySelector('#mainMenuClose');
  mainMenuBtn.addEventListener('click', () => {
    mainMenu.classList.add('inno-menu-active');
  });
  mainMenuClose.addEventListener('click', () => {
    mainMenu.classList.remove('inno-menu-active');
  });
};



// Get current date and time
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentTime = `${currentHour}:${currentMinute}`;
let currentFullDate = `${currentYear}-${currentMonth}-${currentDay}`;

// Add leading zero to single digit days and months
if (currentDay < 10) currentDay = `0${currentDay}`;
if (currentMonth < 10) currentMonth = `0${currentMonth}`;



async function getChallenges() {
  const apiRef = "assets/data/challenges.json";
  const response = await fetch(apiRef);
  const challenges = await response.json();
  return challenges;
}





let uploadImages = () => {
  // Upload Images Input With Preview
  const inputImages = document.querySelector("#innoImgInput");
  const pictureWrapper = document.querySelector(".inno-img-upload-wp");
  const pictureImage = document.querySelector(".inno-img-upload-img");
  const pictureDetails = document.querySelector(".inno-img-upload-dtls");
  const pictureImageTxt = `<i class="inb in-image"></i>
<strong>أفلت الصورة هنا </strong>
<span>أو اضغط لاختيار صورة من جهازك</span>
<span>صورة لا يقل حجمها عن 1920 × 1080 بيكسل</span>`;


  pictureImage.innerHTML = pictureImageTxt;

  // drag and drop uplaod
  pictureWrapper.addEventListener("dragover", (e) => {
    e.preventDefault();
    pictureWrapper.classList.add("inno-img-upload-dragover");
  });
  pictureWrapper.addEventListener("dragleave", () => {
    pictureWrapper.classList.remove("inno-img-upload-dragover");
  }
  );
  pictureWrapper.addEventListener("drop", (e) => {
    e.preventDefault();
    pictureWrapper.classList.remove("inno-img-upload-dragover");
    const files = e.dataTransfer.files;
    inputImages.files = files;
    inputImages.dispatchEvent(new Event("change"));
  });




  inputImages.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];


    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;

        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("inno-img-upload-done");

        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
      });

      reader.readAsDataURL(file);
    } else {
      pictureImage.innerHTML = pictureImageTxt;
    }
    const fileSizeBite = file.size;
    const fileSizeKilo = (fileSizeBite / 1024);
    const fileSize = fileSizeKilo.toFixed(0);
    const fileName = inputTarget.value.split("\\").pop();
    const fileNameShort = fileName.length > 20 ? fileName.slice(0, 20) + "..." : fileName;
    pictureDetails.innerHTML = `
    <span class="inno-img-upload-size">${fileSize} كيلو بايت</span>
    <span class="inno-img-upload-size">${fileNameShort}  </span>`;
    // size limit
    if (fileSizeKilo > 1000) {
      pictureDetails.innerHTML = `<span class="inno-img-upload-error">حجم الملف كبير جداً</span>`;
      inputTarget.value = "";
      pictureImage.innerHTML = pictureImageTxt;
    }
    // delete file button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("inno-img-upload-delete");
    deleteBtn.innerHTML = `<i class="inb in-trash"></i>`;
    pictureWrapper.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      inputTarget.value = "";
      pictureImage.innerHTML = pictureImageTxt;
      pictureDetails.innerHTML = "";
      deleteBtn.style.opacity = "0";
    });

  });
};

let uploadFiles = () => {

  // Upload Files Input With Preview
  const inputFiles = document.querySelector("#innoFileInput");
  const fileWrapper = document.querySelector(".inno-file-upload-wp");
  const fileFile = document.querySelector(".inno-file-upload-file");
  const fileDetails = document.querySelector(".inno-file-upload-dtls");
  const fileFileTxt = `<i class="inb in-file"></i>
<strong>أفلت الملف هنا </strong>
<span>أو اضغط لاختيار ملف من جهازك</span>
<span>الملفات المسموحة: pdf, doc, docx, xls, xlsx</span>`;
  fileFile.innerHTML = fileFileTxt;

  // drag and drop uplaod
  fileWrapper.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileWrapper.classList.add("inno-file-upload-dragover");
  });
  fileWrapper.addEventListener("dragleave", () => {
    fileWrapper.classList.remove("inno-file-upload-dragover");
  }
  );
  fileWrapper.addEventListener("drop", (e) => {
    e.preventDefault();
    fileWrapper.classList.remove("inno-file-upload-dragover");
    const files = e.dataTransfer.files;
    inputFiles.files = files;
    inputFiles.dispatchEvent(new Event("change"));
  }
  );

  inputFiles.addEventListener("change", function (e) {

    const allFiles = inputFiles.files;
    const allFilesLength = allFiles.length;
    const allFilesArr = [];
    for (let i = 0; i < allFilesLength; i++) {
      allFilesArr.push(allFiles[i]);

      console.log(allFiles);
      let mainUploadedFile = document.getElementById("mainUploadedFile");

      let uploadedFile = allFiles[i];
      let fileType = "";
      switch (uploadedFile.type) {
        case "application/pdf":
          fileType = "pdf";
          break;
        case "application/msword": case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          fileType = "doc";
          break;
        case "application/vnd.ms-excel": case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          fileType = "xls";
          break;
        case "application/vnd.ms-powerpoint": case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          fileType = "ppt";
          break;
        case "application/x-rar-compressed": case "application/zip": case "application/x-7z-compressed": case "application/x-tar": case "application/x-zip-compressed":
          fileType = "zip";
          break;
        case "image/png": case "image/jpeg": case "image/jpg": case "image/gif": case "image/svg+xml": case "image/webp": case "image/bmp": case "image/tiff": case "image/ico":
          fileType = "img";
          break;
        default:
          fileType = "file";
      }

      mainUploadedFile.innerHTML += `
    <div class="inno-uploaded-file">
      <img src="assets/img/extensions/${fileType}.svg" alt="${fileType}" />
      <strong>${uploadedFile.name}</strong>
      <span>${uploadedFile.size} كيلو بايت</span>
      <button class="inno-btn inno-btn-xs inno-btn-danger" id="deleteFile"><i class="inb in-trash"></i></button>
    </div>

    `
    };


  });


};

const addNewIdea = () => {
  let addIdeaPopUp = document.getElementById("addIdeaPopUp");
  addIdeaPopUp.innerHTML = `
  <div class="inno-popup-inner">
  <div class="inno-popup-header">
    <div class="inno-title">
      <h4>انشاء فكرة جديدة</h4>
    </div>
    <div class="inno-popup-close">
      <button id="innoPopupClose" onclick="closePopup()"><i class="inb in-times-square"></i></button>
    </div>
  </div>

  <div class="inno-popup-body">
    <div class="row">
      <div class="col-12">
        <div class="inno-form-control-wp">
          <label for="">عنوان الفكرة</label>
          <input type="text" class="inno-form-control" placeholder="أضف عنوانا مناسبا لفكرتك لا يتجاوز 240 حرفا" />
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="inno-form-control-wp">
          <label for="">وصف الفكرة</label>
          <textarea name="" class="inno-form-control" id=""></textarea>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="inno-form-control-wp">
          <label for="">صورة الغلاف</label>
          <label class="inno-upload" for="innoImgInput" tabindex="0">
            <div class="inno-img-upload-wp">
              <div class="inno-img-upload-img-wp">
                <div class="inno-img-upload-img"></div>
              </div>
              <div class="inno-img-upload-dtls"></div>
            </div>
          </label>

          <input class="d-none" type="file" name="innoImgInput" id="innoImgInput" accept="image/*" />
        </div>
      </div>
      <div class="col-12">
        <div class="inno-form-control-wp">
          <label for="">المشاركون بالفكرة</label>
          <div class="inno-add-autors">
            <div class="inno-add-autor-wp">
              <img src="assets/img/profiles/profile-01.png" alt="" /><span>فوزية رعد العتيبي</span><button class="inno-btn inno-btn-xs inno-btn-danger"><i class="inb in-trash"></i></button>
            </div>
            <div class="inno-add-autor-wp">
              <img src="assets/img/profiles/profile-02.png" alt="" /><span>محمد خالد السويلم</span><button class="inno-btn inno-btn-xs inno-btn-danger"><i class="inb in-trash"></i></button>
            </div>
            <a href="" class="inno-add-autor-wp inno-add-new"><i class="inb in-user"></i><span>إضافة مشارك</span></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12">
        <div class="inno-form-control-wp">
          <label for="">المرفقات</label>
          <div class="row w-100">
            <div class="col-12 col-md-6">
              <label class="inno-upload" for="innoFileInput" tabindex="0">
                <div class="inno-file-upload-wp">
                  <div class="inno-file-upload-file-wp">
                    <div class="inno-file-upload-file"></div>
                  </div>
                  <div class="inno-file-upload-dtls"></div>
                </div>
              </label>
              <input class="d-none" type="file" name="innoFileInput" id="innoFileInput" multiple />
            </div>
            <div class="col-12 col-md-6">
              <div class="inno-uploaded-wp" id="mainUploadedFile"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inno-popup-footer">
    <div class="inno-check-radio">
      <input type="checkbox" name="innoCheck" id="innoCheck" />
      <label for="innoCheck"> الموافقة على الشروط والأحكام و سياسات الخصوصية</label>
    </div>

    <div class="inno-btns-wp">
      <button class="inno-btn inno-btn-gray" onclick="closePopup()">حفظ كمسودة</button>
      <button class="inno-btn inno-btn-primary" onclick="closePopup()">إضافة الفكرة</button>
    </div>
  </div>
</div>
  `
};

const openPopup = () => {

  addIdeaPopUp.classList.add("inno-active");
};
const closePopup = () => {
  addIdeaPopUp.classList.remove("inno-active");
};
const getAllGoals = () => {
  const goalsArray = [
    {
      description: "تطوير منصة تفاعلية لتحقيق الأهداف المشتركة في الوزارة بكفاءة ",
      imgSrc: "10.svg",
    },
    {
      description: "تمكين الأعضاء من توليد الأفكار والتصميم الإبداعي",
      imgSrc: "06.svg",
    },
    {
      description: "تعزيز البنية التحتية الرقمية التي تدعم الابتكار",
      imgSrc: "08.svg",
    },
    {
      description: "تشجيع المشاركة الفعّالة من جميع الموظفين لتعزيز ثقافة الابتكار والتطوير داخل الوزارة",
      imgSrc: "01.svg",
    },
    {
      description: "تمكين الأعضاء من التفاعل والمشاركة",
      imgSrc: "09.svg",
    }
  ];

  const allGoals = document.getElementById("allGoals");
  goalsArray.forEach((goal) => {
    allGoals.innerHTML += `
  <div class="inno-goal">
    <div class="inno-goal-icon">
      <img src="assets/img/goals/${goal.imgSrc}" alt="" />
    </div>
    <p>${goal.description}</p>
  </div>
  `
  }
  );

};
// About Page Coals 


const getTheme = () => {
  getFooter();
  getHeader();
  mobileMenu();
  userDropMenu();
  stickyHeader();
  getPageTitle();
  addNewIdea();
  uploadFiles();
  uploadImages();
  openPopup();
  closePopup();
};
