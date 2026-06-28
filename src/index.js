function displayPoem(response) {
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
    " You are an expert in writing romantic poetry. Your task is to generate a romantic poem with exactly 4 lines based on the user's instructions. Return the poem in basic HTML, using `<br />` to separate each line. Do not include a title, introduction, explanation, or quotation marks. At the end of the poem, on a new line, sign it with `<strong>SheCodes AI</strong>`. The signature must appear only at the end of the poem;";

  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 console.log("Generating poem ");
 console.log(`Prompt: ${prompt}`);
 console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
