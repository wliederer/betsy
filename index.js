console.log("lets go!");

fetch(
  `https://api.playpickup.com/v2/contests/10/leaderboard?token=f39befcb-1b91-4ec1-95d7-9d00db67b6d9`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    // console.log(data);
    const leaderboard = document.getElementById("leaderboard");
    data.forEach((d) => {
      const li = document.createElement("li");
      li.textContent = d.username + " - " + d.total;
      leaderboard.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// fetch(
//   `file:///Users/williamliederer/Documents/wliederer.github.io/article1.html`
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.text(); // Parse the response body as JSON
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error);
//   });
