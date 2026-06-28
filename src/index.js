function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "05ctocdff9cb8d3470d18abedf4d4794";

  let context =
    "You are an expert in writing romantic poetry. Your task is to generate a romantic poem with exactly 4 lines based on the user's instructions. Return the poem in basic HTML, using <br /> to separate each line. Do not include a title, introduction, explanation, or quotation marks. At the end of the poem, on a new line, sign it with <strong>SheCodes AI</strong>.";

  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an English poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);

  instructionsInput.value = "";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
