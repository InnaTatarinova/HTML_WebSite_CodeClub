// Function for scroll to section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  hideMenuList();
}

//show menu navigation for 750px window size
function showMenuList() {
  let headerEl = document.getElementById("startPage");
  headerEl.classList.add("startPageWhenWindowDecrease");
  headerEl.classList.remove("startPage");

  let titleEl = document.getElementById("greetingText");
  titleEl.style.display = "none";

  let textEl = document.getElementById("descr");
  textEl.style.display = "none";

  let iconMenu = document.getElementById("iconMenu");
  iconMenu.classList.add("hiddenEl");
  iconMenu.classList.remove("showEl");

  let iconClose = document.getElementById("iconClose");
  iconClose.classList.remove("hiddenEl");

  let menuNav = document.getElementById("menu_nav");
  menuNav.classList.add("showEl");
  menuNav.classList.add("menuStartPageWhenWindowDecrease");
}

//show menu navigation for 750px window size
function hideMenuList() {
  let headerEl = document.getElementById("startPage");
  headerEl.classList.remove("startPageWhenWindowDecrease");
  headerEl.classList.add("startPage");

  let titleEl = document.getElementById("greetingText");
  titleEl.style.display = "block";

  let textEl = document.getElementById("descr");
  textEl.style.display = "block";

  let iconMenu = document.getElementById("iconMenu");
  iconMenu.classList.add("showEl");
  iconMenu.classList.remove("hiddenEl");

  let iconClose = document.getElementById("iconClose");

  iconClose.classList.add("hiddenEl");

  let menuNav = document.getElementById("menu_nav");
  menuNav.classList.remove("showEl");
  menuNav.classList.remove("menuStartPageWhenWindowDecrease");
}

//change the icon and show information according to the chosen icon
function chooseIconBouncy(iconElId, choosenSection) {
  let elem;
  switch (choosenSection) {
    case "btnIconAboutUs":
      elem = document.getElementsByClassName("btnIconAboutUs");
      break;
    case "btnIconService":
      elem = document.getElementsByClassName("btnIconService");
      break;
  }

  for (let el of elem) {
    el.classList.add("deleteChoosenIconBackground");
  }
  let iconId = document.getElementById(iconElId);
  iconId.classList.add("setChoosenIconBackground");
  iconId.classList.remove("deleteChoosenIconBackground");

  let title = document.getElementsByClassName("iconTitle");
  let iconText = document.getElementsByClassName("iconText");
  let iconExplanation = document.getElementsByClassName("iconExplanation");

  let brandPersNumber = document.getElementById("brandPercentageNumber");
  let webPersNumber = document.getElementById("webPercentageNumber");
  let uidPersNumber = document.getElementById("uiPercentageNumber");

  let brandPersPath = document.getElementById("brandPercentagePath");
  let webPersPath = document.getElementById("webPercentagePath");
  let uidPersPath = document.getElementById("uiPercentagePath");

  switch (iconElId) {
    //Section with About Us inform
    case "iconInfoPassion":
      title[0].textContent = "Creative Passion";
      iconText[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores";
      iconExplanation[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";
      break;
    case "iconInfoIdea":
      title[0].textContent = "Creative Ideas";
      iconText[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores";
      iconExplanation[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";
      break;
    case "iconInfoLights":
      title[0].textContent = "Creative Lights";
      iconText[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores";
      iconExplanation[0].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";
      break;

    //Section with Service
    case "graphicDesignIcon":
      title[1].textContent = "Graphic Design";
      iconText[1].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti";
      iconExplanation[1].textContent =
        "atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga";
      brandPersNumber.textContent = "80%";
      webPersNumber.textContent = "75%";
      uidPersNumber.textContent = "60%";
      brandPersPath.style.strokeDasharray = "80,100";
      webPersPath.style.strokeDasharray = "75,100";
      uidPersPath.style.strokeDasharray = "60,100";

      break;
    case "logoDesignIcon":
      title[1].textContent = "Logo Design";
      iconText[1].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti";
      iconExplanation[1].textContent =
        "atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga";
      brandPersNumber.textContent = "60%";
      webPersNumber.textContent = "95%";
      uidPersNumber.textContent = "60%";
      brandPersPath.style.strokeDasharray = "60,100";
      webPersPath.style.strokeDasharray = "95,100";
      uidPersPath.style.strokeDasharray = "60,100";
      break;
    case "webDesignIcon":
      title[1].textContent = "Web Design";
      iconText[1].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti";
      iconExplanation[1].textContent =
        "atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga";
      brandPersNumber.textContent = "100%";
      webPersNumber.textContent = "100%";
      uidPersNumber.textContent = "100%";
      brandPersPath.style.strokeDasharray = "100,100";
      webPersPath.style.strokeDasharray = "100,100";
      uidPersPath.style.strokeDasharray = "100,100";
      break;
    case "webMaintenanceIcon":
      title[1].textContent = "Web Maintenance";
      iconText[1].textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti";
      iconExplanation[1].textContent =
        "atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga";
      brandPersNumber.textContent = "50%";
      webPersNumber.textContent = "25%";
      uidPersNumber.textContent = "80%";
      brandPersPath.style.strokeDasharray = "50,100";
      webPersPath.style.strokeDasharray = "25,100";
      uidPersPath.style.strokeDasharray = "80,100";
      break;
  }
}

// ShowSlide for Portfolio

let resizedId;
let slideIndex = 1;
let timer;

function resizedEnded() {
  if (window.innerWidth <= 750) {
    showSlides(slideIndex);
  }
}

window.addEventListener("resize", function () {
  resizedEnded();
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Show Slide For Team
function currentTeamSlide(n) {
  let teamName = document.getElementById("teamName");
  let teamPosition = document.getElementById("teamPosition");
  let positionDescr = document.getElementById("positionDescr");
  let percBrend = document.getElementById("percBrend");
  let percWeb = document.getElementById("percWeb");
  let percUI = document.getElementById("percUI");
  let percentLineBranding = document.getElementsByClassName(
    "percentLineBranding"
  );
  let percentLineWeb = document.getElementsByClassName("percentLineWeb");
  let percentLineUI = document.getElementsByClassName("percentLineUI");
  let photoMember = document.getElementById("photoMember");

  switch (n) {
    case 1:
      photoMember.src = "img/teamPhoto4.png";
      teamName.textContent = "Abdullah Noman";
      teamPosition.textContent = "Creative Director, Code Cafe";
      positionDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium";
      percBrend.textContent = "80%";
      percWeb.textContent = "75%";
      percUI.textContent = "65%";
      percentLineBranding[0].style.background =
        "linear-gradient(to right, #19bd99 80%, #b1b6bd 20%)";
      percentLineWeb[0].style.background =
        "linear-gradient(to right, #19bd99 65%, #b1b6bd 35%)";
      percentLineUI[0].style.background =
        "linear-gradient(to right, #19bd99 75%, #b1b6bd 25%)";
      break;
    case 2:
      photoMember.src = "img/teamPhoto3.png";
      teamName.textContent = "Patrick Jeffrey";
      teamPosition.textContent = "Web Developer, Code Cafe";
      positionDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium";
      percBrend.textContent = "30%";
      percWeb.textContent = "100%";
      percUI.textContent = "85%";
      percentLineBranding[0].style.background =
        "linear-gradient(to right, #19bd99 30%, #b1b6bd 70%)";
      percentLineWeb[0].style.background =
        "linear-gradient(to right, #19bd99 100%, #b1b6bd 0%)";
      percentLineUI[0].style.background =
        "linear-gradient(to right, #19bd99 85%, #b1b6bd 15%)";
      break;
    case 3:
      photoMember.src = "img/teamPhoto2.png";
      teamName.textContent = "Stephanie Ann";
      teamPosition.textContent = "Designeer, Code Cafe";
      positionDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium";
      percBrend.textContent = "70%";
      percWeb.textContent = "30%";
      percUI.textContent = "95%";
      percentLineBranding[0].style.background =
        "linear-gradient(to right, #19bd99 70%, #b1b6bd 30%)";
      percentLineWeb[0].style.background =
        "linear-gradient(to right, #19bd99 30%, #b1b6bd 70%)";
      percentLineUI[0].style.background =
        "linear-gradient(to right, #19bd99 95%, #b1b6bd 5%)";
      break;
  }
}

//Show Slide For Testimonials
function currentTestimSlide(n) {
  let photoTestim = document.getElementById("photoTestim");
  let testimDescr = document.getElementById("testimDescr");
  let testimName = document.getElementById("testimName");
  let testimProf = document.getElementById("testimProf");
  switch (n) {
    case 1:
      photoTestim.src = "img/testimonialsPhoto2.jpg";
      testimDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia";
      testimName.textContent = "LORENZA";
      testimProf.textContent = "FOUNDER, ARTWAYS BD";
      break;
    case 2:
      photoTestim.src = "img/testimonialsPhoto3.jpg";
      testimDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia";
      testimName.textContent = "PARTHO";
      testimProf.textContent = "CREATIVE DIRECTOR, SMITH INC";
      break;
    case 3:
      photoTestim.src = "img/testimonialsPhoto4.jpg";
      testimDescr.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia";
      testimName.textContent = "KEVIN";
      testimProf.textContent = "MANAGER, BEAHAN-MORAR";
      break;
  }
}

//Show Slide For Blog
function currentBlogSlide(n) {
  let titleBlog = document.getElementById("titleBlog");
  let authorBlog = document.getElementById("authorBlog");
  let commentsBlog = document.getElementById("commentsBlog");
  let newsBlog = document.getElementById("newsBlog");
  switch (n) {
    case 1:
      titleBlog.textContent = "The trending Landing Pages";
      authorBlog.textContent = "by Kabir Uddin";
      commentsBlog.textContent = "6950 Likes - 243 Comments - 703 shares";
      newsBlog.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";
      break;
    case 2:
      titleBlog.textContent = "Prepare for AI explosion";
      authorBlog.textContent = "by Thomas Ernser";
      commentsBlog.textContent = "150 Likes - 111 Comments - 1 shares";
      newsBlog.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";

      break;
    case 3:
      titleBlog.textContent = "Top trends in tech";
      authorBlog.textContent = "by Elisha Leffler";
      commentsBlog.textContent = "15000 Likes - 500 Comments - 5000 shares";
      newsBlog.textContent =
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r";
      break;
  }
}
