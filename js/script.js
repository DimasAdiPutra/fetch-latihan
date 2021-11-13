import { dataRequest, dataPrint, modalRequest, modalPrint } from "./app.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
let movies;

searchButton.addEventListener("click", async function () {
  try {
    movies = await dataRequest(searchInput.value);
    dataPrint(movies);
    searchInput.value = "";
  } catch (err) {
    alert(err);
  }
});

searchInput.addEventListener("keyup", async function (e) {
  if (e.keyCode === 13) {
    try {
      movies = await dataRequest(searchInput.value);
      dataPrint(movies);
      searchInput.value = "";
    } catch (err) {
      alert(err);
    }
  }
});

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const details = await modalRequest(imdbid);
    modalPrint(details);
  }
});
