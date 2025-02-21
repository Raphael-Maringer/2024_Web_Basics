loadData();

document.getElementById("btnLoad").addEventListener("click", function () {
  loadData();
});

function loadData() {
  fetch("https://67b847d0699a8a7baef366ee.mockapi.io/Animals")
    .then((response) => response.json())
    .then((json) => {
      let html = [];

      json.forEach((todo) => {
        html.push(
          "<div><div>" +
            todo.title +
            "</div><img width='50px' src='" +
            todo.responsible +
            "?id=" +
            Math.random() +
            " '/></div>"
        );
      });
      document.getElementById("content").innerHTML = html.join("");
    });
}