class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

// Destinatio > nav


function clickmoon() {
  var moon = document.getElementById("moon");
  var mars = document.getElementById("mars");
  var europa = document.getElementById("europa");
  var titan = document.getElementById("titan");

  moon.style.display = "flex"
  mars.style.display = "none"
  europa.style.display = "none"
  titan.style.display = "none"
}

function clickmars() {
  var moon = document.getElementById("moon");
  var mars = document.getElementById("mars");
  var europa = document.getElementById("europa");
  var titan = document.getElementById("titan");

  moon.style.display = "none"
  mars.style.display = "flex"
  europa.style.display = "none"
  titan.style.display = "none"
}

function clickeuropa() {
  var moon = document.getElementById("moon");
  var mars = document.getElementById("mars");
  var europa = document.getElementById("europa");
  var titan = document.getElementById("titan");

  moon.style.display = "none"
  mars.style.display = "none"
  europa.style.display = "flex"
  titan.style.display = "none"
}

function clicktitan() {
  var moon = document.getElementById("moon");
  var mars = document.getElementById("mars");
  var europa = document.getElementById("europa");
  var titan = document.getElementById("titan");

  moon.style.display = "none"
  mars.style.display = "none"
  europa.style.display = "none"
  titan.style.display = "flex"
}

//crew page

function clickdouglas() {
  var douglas = document.getElementById("douglas");
  var mark = document.getElementById("mark");
  var victor = document.getElementById("victor");
  var anousheh = document.getElementById("anousheh");

  douglas.style.display = "block"
  mark.style.display = "none"
  victor.style.display = "none"
  anousheh.style.display = "none"
}

function clickmark() {
  var douglas = document.getElementById("douglas");
  var mark = document.getElementById("mark");
  var victor = document.getElementById("victor");
  var anousheh = document.getElementById("anousheh");

  douglas.style.display = "none"
  mark.style.display = "block"
  victor.style.display = "none"
  anousheh.style.display = "none"
}

function clickvictor() {
  var douglas = document.getElementById("douglas");
  var mark = document.getElementById("mark");
  var victor = document.getElementById("victor");
  var anousheh = document.getElementById("anousheh");

  douglas.style.display = "none"
  mark.style.display = "none"
  victor.style.display = "block"
  anousheh.style.display = "none"
}

function clickanousheh() {
  var douglas = document.getElementById("douglas");
  var mark = document.getElementById("mark");
  var victor = document.getElementById("victor");
  var anousheh = document.getElementById("anousheh");

  douglas.style.display = "none"
  mark.style.display = "none"
  victor.style.display = "none"
  anousheh.style.display = "block"
}

//technology page

function clicklaunch() {
  var launch = document.getElementById("launch");
  var spaceport = document.getElementById("spaceport");
  var capsule = document.getElementById("capsule");

  launch.style.display = "block"
  spaceport.style.display = "none"
  capsule.style.display = "none"
}

function clickspaceport() {
  var launch = document.getElementById("launch");
  var spaceport = document.getElementById("spaceport");
  var capsule = document.getElementById("capsule");

  launch.style.display = "none"
  spaceport.style.display = "block"
  capsule.style.display = "none"
}

function clickcapsule() {
  var launch = document.getElementById("launch");
  var spaceport = document.getElementById("spaceport");
  var capsule = document.getElementById("capsule");

  launch.style.display = "none"
  spaceport.style.display = "none"
  capsule.style.display = "block"
}