const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const word = document.getElementById("word");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `  <div class="word">
          <h1>${inpWord}</h1>
        </div>
        <div class="detail">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </p>

        <p class="word-example">
      ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
    });
});
