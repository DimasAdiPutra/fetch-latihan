// mengambil data dari api
function dataRequest(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=8789a299&s=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      return data.Search;
    });
}

// mencetak data
function dataPrint(data) {
  let cards = "";
  data.forEach((movie) => {
    cards += createCards(movie);
  });
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// mengambil detail
function modalRequest(id) {
  return fetch(`http://www.omdbapi.com/?apikey=8789a299&i=${id}`)
    .then((response) => response.json())
    .then((response) => response);
}

// menampilkan detail
function modalPrint(data) {
  const modalDetail = document.querySelector(".modal-detail");
  modalDetail.innerHTML = createModal(data);
}

// createCards
function createCards(data) {
  return /*html*/ `
  <div class="col-md-3">
    <div class="card mb-3">
      <img src="${data.Poster}" class="card-img-top" alt="${data.Title}" />
      <div class="card-body">
        <h5 class="card-title">${data.Title}</h5>
        <p class="card-text">${data.Year}</p>
        <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#detail" data-imdbid="${data.imdbID}">Show Detail</a>
      </div>
    </div>
  </div>`;
}

// createModal
function createModal(data) {
  return /*html*/ `
  <div class="col-md-3 d-flex justify-content-center align-items-center">
    <img class="img-fluid mb-3" src="${data.Poster}" alt="${data.Title}" />
  </div>
  <div class="col">
    <ul class="list-groupl">
      <li class="list-group-item"><h4>${data.Title} (${data.Year})</h4></li>
      <li class="list-group-item"><strong>Released :</strong> ${data.Released}</li>
      <li class="list-group-item"><strong>Genre :</strong> ${data.Genre}</li>
      <li class="list-group-item"><strong>Director :</strong> ${data.Director}</li>
      <li class="list-group-item"><strong>Writer :</strong> ${data.Writer}</li>
      <li class="list-group-item"><strong>Actors :</strong> ${data.Actors}</li>
      <li class="list-group-item"><strong>Plot :</strong> ${data.Plot}</li>
    </ul>
  </div>`;
}

export { dataRequest, dataPrint, modalRequest, modalPrint };
