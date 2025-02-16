function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  function createBoxes(amount) {
    if (amount < 1 || amount > 100) return;

    boxesContainer.innerHTML = ""; 

    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      elements.push(box);
      size += 10;
    }

    boxesContainer.append(...elements);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createBtn.addEventListener("click", () => {
    const amount = Number(input.value.trim());
    createBoxes(amount);
    input.value = ""; 
  });

  destroyBtn.addEventListener("click", destroyBoxes);