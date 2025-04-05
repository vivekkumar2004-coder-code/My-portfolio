let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main-body");

main.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
