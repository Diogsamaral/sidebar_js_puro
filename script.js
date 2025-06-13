const expand_btn = document.querySelector(".expand-btn");
const icon = expand_btn.querySelector("i");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");

  if (document.body.classList.contains("collapsed")) {
    icon.classList.remove("fa-angle-left");
    icon.classList.add("fa-angle-right");
  } else {
    icon.classList.remove("fa-angle-right");
    icon.classList.add("fa-angle-left");
  }
});

const current = window.location.href;

const allLinks = document.querySelector(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search_wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});
