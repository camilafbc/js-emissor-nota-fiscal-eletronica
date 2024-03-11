function ativarNavLink() {
  let navLinks = document.querySelectorAll(".nav-link");

  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains("active")) {
      navLinks[i].classList.remove("active");
      navLinks[i + 1].classList.add("active");
      break;
    }
  }
}

function ativarTab() {
  let tabs = document.querySelectorAll(".tab-pane");

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("show" && "active")) {
      tabs[i].classList.remove("show", "active");
      tabs[i + 1].classList.add("show", "active");

      tabs[i + 1].childNodes[1][0].focus();
      break;
    }
  }
}

export { ativarNavLink, ativarTab }