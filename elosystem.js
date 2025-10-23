function calculateElo() {
  const ratingA = parseInt(document.getElementById("playerA").value);
  const ratingB = parseInt(document.getElementById("playerB").value);

  const expectedA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
  const expectedB = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));

  document.getElementById("result").innerHTML = `
    <p>Expected score for Player A: ${expectedA.toFixed(2)}</p>
    <p>Expected score for Player B: ${expectedB.toFixed(2)}</p>
  `;
}
