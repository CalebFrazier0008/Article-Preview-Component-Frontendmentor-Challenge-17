let shareBoxElement = document.getElementById("Share-Box");
let profileElement = document.getElementById("Profile-1");
let shareElement = document.getElementById("Share-1");
let shareBoxElement2 = document.getElementById("Block");
let ArrowElement2 = document.getElementById("Arrow");
let shareElement2 = document.getElementById("Share-3");
function toggle() {
  profileElement.classList.toggle("Profile");
  shareElement.classList.toggle("Clicked");
  shareBoxElement.classList.toggle("Share-Active");
}
function toggle2() {
  shareElement2.classList.toggle("Clicked");
  shareBoxElement2.classList.toggle("Block-Up");
  ArrowElement2.classList.toggle("Arrow-Up");
}
