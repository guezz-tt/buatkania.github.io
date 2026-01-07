// LOVE CURSOR
document.addEventListener("mousemove", e => {
  const love = document.createElement("div");
  love.className = "love";
  love.innerHTML = "💖";
  love.style.left = e.clientX + "px";
  love.style.top = e.clientY + "px";
  document.body.appendChild(love);

  setTimeout(() => love.remove(), 1000);
});

// TIUP LILIN
document.getElementById("blow").onclick = () => {
  document.querySelector(".flame").style.display = "none";
};
