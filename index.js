"use strict";

// Took the HTML content from the capstone project requirements and stored it in an array of strings
const capstoneReq = [
  `<h1>Capstone Project</h1>`,
  `<p>Please complete a project that meets the following criteria. This project will demonstrate your grasp of the most important skills from Module One. If you are doing a project that is not a personal portfolio or ecommerce site, please check with your instructor before starting. Do not generate the code using AI.</p>`,
  `<p>This will be graded via screen share you will have to talk about your code.</p>`,
  `<h2 class="h6 italic">Requirements and scoring</h2>`,
  `<ul>
      <li class="bold">Style part of your content with Bootstrap classes - 15%</li>
      <ul>
        <li>Include responsive design on both pages</li>
        <ul>
          <li>Include Bootstrap Grid on at least one page</li>
        </ul>
        <li>Include at least one of the following: bootstrap nav, card, or list group</li>
        <li>Include at least one bootstrap button</li>
        <li>Include at least one element with bootstrap margin or padding</li>
      </ul>
      <li class="bold">Style part of your content with regular CSS - 10%</li>
      <ul>
        <li>Use at least one id selector</li>
        <li>Use at least one class selector</li>
      </ul>
      <li class="bold">HTML - 15%</li>
      <ul>
        <li>Include a navigation bar to switch between pages</li>
        <li>Includes at least 2 pages</li>
        <li>Include at least one list (unordered or ordered)</li>
        <li>Include at least 2 buttons</li>
        <li>The navbar should be on each page, and allow navigation to every page</li>
      </ul>
      <li class="bold">JavaScript - 30%</li>
      <ul>
        <li>Each button in the HTML should have a click eventListener</li>
        <li>Use at least one loop (for, while) OR array method like forEach(), map() or reduce()</li>
      </ul>
      <li class="bold">Best practices - 10%</li>
      <ul>
        <li>Correct HTML formating</li>
        <ul>
          <li>Content inside of the <body></body> tag</li>
          <li>Correct use of open / closing tags</li>
        </ul>
        <li>Correct JavaScript formatting - no unused variables / functions</li>
        <li>Correct CSS formatting - no unused ids, classes</li>
      </ul>
      <li class="bold">Version control - 10%</li>
      <ul>
        <li>The code should be stored in a GitHub repository</li>
      </ul>
      <li class="bold">Deployment - 10%</li>
      <ul>
        <li>The site should be deployed on GitHub Pages</li>
      </ul>
    </ul>`,
  `<p class="italic">Please submit 2 links for the assignment</p>`,
  `<ol>
      <li>The GitHub repository link for your code</li>
      <li>The GitHub Pages URL for your deployed site</li>
    </ol>`,
];

// Selecting the capstone project requirements element from the DOM
const capReq = document.getElementById("capReq");
// Selecting the capstone project requirements button from the DOM
const capReqbtn = document.getElementById("capReqbtn");
// function to render the capstone project requirements to the DOM
function recRender() {
  for (let i = 0; i < capstoneReq.length; i++) {
    capReq.innerHTML += capstoneReq[i];
  }
}

// Event listener to render the capstone project requirements to the DOM when the button is clicked
capReqbtn.addEventListener("click", function () {
  recRender();
  capReqbtn.disapled = true;
  capReqbtn.style.display = "none";
  capReqbtn.style.visibility = "hidden";
});
