let isSidebarClick = false; // Variável para saber se a navegação foi feita pela sidebar

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function () {
    isSidebarClick = true;
    console.log(isSidebarClick);
    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    setTimeout(() => {
      isSidebarClick = false;
    }, 500);
  });
});

window.addEventListener("message", function (event) {
  const page = event.data;
  const links = document.querySelectorAll(".nav-link");
  console.log(isSidebarClick);
  if (!isSidebarClick) {
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(page)) {
        link.classList.add("active");
      }
    });
  }
});
