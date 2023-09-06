const menuBtn = document.querySelector(".open-menu");
const cancelBtn = document.querySelector(".close-menu");
const navLinkBtns = document.querySelectorAll(".nav .btn");
const nav = document.querySelector(".nav");
const navListItems = document.querySelectorAll(".nav-item");
const headerTag = document.querySelector("header");
let darkMode = JSON.parse(localStorage.getItem('darkMode'));
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const lightModeToggle = document.querySelector('#light-mode-toggle')
const companyLogoDark = document.querySelector('.company-logo.dark')
const comapnyLogo = document.querySelector('.company-logo')


const allNavLinks = [...navListItems, ...navLinkBtns];
const toggleModeBtns = [lightModeToggle,darkModeToggle]
// toggle
function toggleMenu() {
  nav.classList.toggle("show");

  allNavLinks.forEach((el, index) => {
    if (!el.style.animation) {
      el.style.animation = `slideX 0.5s ease forwards ${index / 5 + 1}s `;
    } else {
      el.style.animation = "";
    }
  });
  menuBtn.classList.toggle("notShowMenu");
  cancelBtn.classList.toggle("notShowMenu");
};

const arrayBtn = [menuBtn, cancelBtn];
arrayBtn.forEach((el) => el.addEventListener("click", toggleMenu));

allNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (Number(window.innerWidth) < 768) {
      toggleMenu();
    }
  });
});



// dark mode
const enableDarkMode = () =>{
  document.body.classList.add("darkMode");
  darkModeToggle.classList.add("showDark")
  lightModeToggle.classList.add("showDark")
  comapnyLogo.classList.add("showDark")
  companyLogoDark.classList.add("showDark")
};


const toggleDarkModeFunc = () => {
  document.body.classList.toggle("darkMode");
  darkModeToggle.classList.toggle("showDark")
  lightModeToggle.classList.toggle("showDark")
  comapnyLogo.classList.toggle("showDark")
  companyLogoDark.classList.toggle("showDark")
  if(!darkMode)
  {
    localStorage.setItem("darkMode",true)
  }else {
    localStorage.setItem("darkMode",false)
  }
}


toggleModeBtns.forEach(el => {
  el.addEventListener("click", () => {
    toggleDarkModeFunc()
  })
})


// nav background
window.addEventListener("scroll", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
  
});


window.addEventListener("load", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
  if(darkMode){
    enableDarkMode()
  }

});

// scrollreveal
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// showcase section
sr.reveal(".showcase-text h2");
sr.reveal(".showcase-text h1", { delay: 300 });
sr.reveal(".showcase-text > p", { delay: 500 });
sr.reveal(".showcase-btn-flex", { delay: 800 });
sr.reveal(".showcase-flex .showcase-img", { delay: 500 });

// category section
sr.reveal(".category .category-smallheading");
sr.reveal(".category .category-main", { delay: 400 });
sr.reveal(".category .category-containerflex .category-flexitem.flexitem1", {
  delay: 600,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem2", {
  delay: 900,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem3", {
  delay: 1200,
});
sr.reveal(".category .category-containerflex .category-flexitem.flexitem4", {
  delay: 1500,
});

// destination section
sr.reveal(".destination .destination-txt h3", { delay: 400 });
sr.reveal(".destination .destination-txt h2", { delay: 800 });
sr.reveal(
  ".destination .destination-flex .destination-dest.flexitem1",
  { delay: 1200 }
);
sr.reveal(
  ".destination .destination-flex .destination-dest.flexitem2",
  { delay: 1500 }
);
sr.reveal(
  ".destination .destination-flex .destination-dest.flexitem3",
  { delay: 1800 }
);

// book section
sr.reveal(".booking .book-flex .easy-txt h4", {
  delay: 300,
});

sr.reveal(".booking .book-flex .easy-txt h2", {
  delay: 600,
});

sr.reveal(
  ".booking .book-flex .easy-flex.one",
  { delay: 1200 }
);
sr.reveal(
  ".booking .book-flex .easy-flex.two",
  { delay: 1600 }
);
sr.reveal(
  ".booking .book-flex .easy-flex.three",
  { delay: 2000 }
);
sr.reveal(".booking .book-flex > div:last-child", { delay: 500 });

// testimonials section
sr.reveal(
  ".testimonials .test-flex .test-txt h4",
  { delay: 400 }
);

sr.reveal(".testimonials .test-flex .test-txt h2", {
  delay: 800,
});

sr.reveal(".testimonials .test-flex .test-txt .circles", { delay: 1200 });

sr.reveal(".testimonials .test-flex .comment", { delay: 500 });

//logo section
sr.reveal(".logos .logo-flex", { delay: 500 });

// subscribe section
sr.reveal(".subscribe .subscribe-board", { delay: 500 });
sr.reveal(".subscribe .subscribe-board > img ", { delay: 800 });
sr.reveal(".subscribe .subscribe-board h3", { delay: 1200 });
sr.reveal(".subscribe .subscribe-board .newsletter", { delay: 1500 });

// footer section
sr.reveal(".footer .footer-containerflex > div:first-child h2", { delay: 400 });
sr.reveal(".footer .footer-containerflex > div:first-child p", { delay: 800 });
sr.reveal(".footer .footer-containerflex ul.footer-list", { delay: 1000 });
sr.reveal(".footer .footer-containerflex .socials > div.socials-iconsflex", {
  delay: 1200,
});

sr.reveal(".footer .footer-containerflex .socials h3", { delay: 1500 });
sr.reveal(".footer .footer-containerflex .socials > div:last-child", {
  delay: 1800,
});
