// harmonika
const titles = document.querySelectorAll(".list_title");

titles.forEach((title) => {
  title.addEventListener("click", function () {
    const parent = this.parentElement;

    document.querySelectorAll(".list").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });
});

// baggrund
const root = document.documentElement;

window.addEventListener("mousemove", (e) => {
  const position = Math.round((e.clientY / window.innerHeight) * 100);
  root.style.setProperty("--position", `${position}%`);
});
