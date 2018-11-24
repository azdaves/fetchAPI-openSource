document.getElementById("getProject").addEventListener("click", getProject);

function getProject() {
  fetch("https://24pullrequests.com/projects.json")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>Open Source Projects</h2>";
      data.forEach(function(projects) {
        output += `
        <ul>
        <li>Category: ${projects.description} </li>
        <li>Lanuage: ${projects.main_language} </li>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}