const darkmode = document.querySelector("#darkmode");

darkmode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
