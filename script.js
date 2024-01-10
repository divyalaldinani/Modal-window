const elements = document.querySelectorAll(".box");

elements.forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".hidden-box").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
  });
});
document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector(".hidden-box").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

const targetElement = document.querySelector(".hidden-box");
// const outsideClick = document.getElementById('outside-click');

function handleClickOutside(event) {
  if (!targetElement.contains(event.target) && event.target !== targetElement) {
    // Click occurred outside the target element
    console.log("Clicked outside the target element");
    // Perform any action you need here
    // outsideClick.style.color = 'red'; // For example, change the color of the paragraph text
  }
}

document.addEventListener("click", handleClickOutside);
