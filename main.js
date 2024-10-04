let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");
let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

function getJoke() {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = item.joke;
      jokeContainer.classList.add("fade");
    });
}
getJoke();
btn.addEventListener("click", getJoke);
