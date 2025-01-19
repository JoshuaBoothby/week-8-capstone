"use strict";

// bootstrap card elements stored in an array of strings to act as portfolio projects
const portCards = [
  `
    <div class="card m-1 p-1 " style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title h5">HTML Lab</h2>
        <p class="card-text">Project showing off some HTML for class.</p>
        <a href="https://github.com/JoshuaBoothby/html-lab-2.git" class="card-link text-decoration-none" target="_blank">Github link</a>
      </div>
    </div>
    `,
  `
    <div class="card m-1 p-1" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title h5">Bootstrap Lab</h2>
        <p class="card-text">Project showing off some Bootstrap for class.</p>
        <a href="https://github.com/JoshuaBoothby/bootstrap-lab-1.git" class="card-link text-decoration-none" target="_blank">Github link</a>
      </div>
    </div>
    `,
  `
    <div class="card m-1 p-1" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title h5">JS Lab 1</h2>
        <p class="card-text">Project showing off some javascript skills.</p>
        <a href="https://github.com/JoshuaBoothby/js-week-6-lab-2.git" class="card-link text-decoration-none" target="_blank">Github link</a>
      </div>
    </div>
    `,
  `
    <div class="card m-1 p-1" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title h5">JS Lab 2</h2>
        <p class="card-text">Project showing off more javascript skills.</p>
        <a href="https://github.com/JoshuaBoothby/js-week-7-lab-2.git" class="card-link text-decoration-none" target="_blank">Github link</a>
      </div>
    </div>
    `,
];

const capPort = document.getElementById("capPort");
const capPortbtn = document.getElementById("capPortbtn");

// function to render the capstone project portfolio to the DOM
function portRender() {
  capPort.innerHTML = portCards.join("");
}

// event listener to render the capstone project portfolio cards to the DOM
capPortbtn.addEventListener("click", portRender);

// event listener to disable the button after it is clicked
capPortbtn.addEventListener("click", function () {
  capPortbtn.disabled = true;
  capPortbtn.style.display = "none";
  capPortbtn.style.visibility = "hidden";
});
