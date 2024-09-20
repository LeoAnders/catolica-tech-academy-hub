document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

window.addEventListener("message", function (event) {
  const page = event.data;
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(page)) {
      link.classList.add("active");
    }
  });
});
