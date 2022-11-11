document.addEventListener("DOMContentLoaded", () => {
  const steps = ["Initialize Project", "Do Some Stuff", "Finish"];
  const stepsContainer = document.getElementById("stepsContainer");
  let selectedStep = 0;

  const populateSteps = () => {
    stepsContainer.innerHTML = null;
    steps.forEach((step, idx) => {
      let isSelected = selectedStep === idx;

      stepsContainer.innerHTML += `
      <!-- item START -->
      <button id="${idx}" class="step flex flex-col justify-center items-center px-10 bg-black py-2 ">
        <h4 class="text-lg font-bold ${
          isSelected ? "text-yellow-500" : "text-white"
        }">${step}</h4>
        <div class="${isSelected ? "visible" : "invisible"}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M6.211,3.578a2,2,0,0,1,3.578,0l4.764,9.528A2,2,0,0,1,12.764,16H3.236a2,2,0,0,1-1.789-2.894Z"
              fill="#ebb32d"
            />
          </svg>
        </div>
      </button>
      <!-- item END -->
      `;
    });
    addListeners();
  };

  const addListeners = () => {
    const stepNodes = document.querySelectorAll(".step");
    stepNodes.forEach((node) => {
      node.addEventListener("click", () => {
        selectedStep = parseInt(node.id);

        populateSteps();
      });
    });
  };

  populateSteps();
});
