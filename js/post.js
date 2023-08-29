function displayPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(users) {
  const sectionElement = document.getElementById("post-card");
  for (user of users) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>Title: ${user.title}</h2>
    <p>Description: ${user.body}</p>
    `;

    div.classList.add("post-style");
    sectionElement.appendChild(div);
  }
}

displayPost();
