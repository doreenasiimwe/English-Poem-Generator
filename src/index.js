function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "No man is an island",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
