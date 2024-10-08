//DOM
const canvasArea = document.querySelector('.etch-a-sketch__canvas-canvas-boxes');
const areaMeasurments = document.querySelector('.etch-a-sketch__control-box-track');
const choosenMeasurments = document.querySelector('.etch-a-sketch__canvas-control-box-measures');


areaMeasurments.addEventListener('input', (e) => {
  choosenMeasurments.textContent = `${e.target.value}x${e.target.value}`
  canvasArea.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`
  canvasArea.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`
  canvasArea.innerHTML = '' //proci, razmislit
  for(let i = 0; i<(Number(e.target.value) * Number(e.target.value)); i++) { //proci, razmislit
    const minBox = document.createElement("div");
    minBox.classList.add('grid--item')
    canvasArea.appendChild(minBox)
  }
  const generatedBoxes = document.querySelectorAll('.grid--item');
  generatedBoxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      e.target.style.background = 'blue'
      
    })
  })
})