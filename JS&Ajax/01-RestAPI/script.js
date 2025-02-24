loadData();

document.getElementById("btnLoad").addEventListener("click", function () {
  loadData();
});

function loadData() {
  fetch("https://67b847d0699a8a7baef366ee.mockapi.io/Animals")
    .then((response) => response.json())
    .then((json) => {
      let html = [];

      json.forEach((animal) => {
        html.push(
          "<div><div>" +
            animal.name +
            "</div><img width='150px' src='" +
            animal.avatar +
            "?id=" +
            Math.random() +
            " '/></div>"
        );
      });
      document.getElementById("content").innerHTML = html.join("");
    });
}