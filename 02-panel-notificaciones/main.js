const markAll = document.querySelector("#mark-all");
const numNotifi = document.querySelector("#num-notifi");

markAll.addEventListener("click", () => {
  const notReadElements = document.querySelectorAll(".not-read");
  console.log(notReadElements);
  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove("bg-red-600");
    notReadElement.classList.remove("not-read");
  });

  const notReadElementsActual = document.querySelectorAll(".not-read");
  numNotifi.innerText = notReadElementsActual.length;
});
