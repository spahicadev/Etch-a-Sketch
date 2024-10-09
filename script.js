//DOM
const canvasArea = document.querySelector('.etch-a-sketch__canvas-canvas-box');
const areaMeasurments = document.querySelector('.etch-a-sketch__control-box-track');
const choosenMeasurments = document.querySelector('.etch-a-sketch__canvas-control-box-measures');
const canvasMode = document.querySelectorAll('.etch-a-sketch__canvas-mode-button');
const resetBtn = document.querySelector('.etch-a-sketch__control-box-button');





//STATEs
let measurmentsValue = areaMeasurments.value;
const initalValueCopy = measurmentsValue;
let smallMode = false;
let mediumMode = true;
let largeMode = false;
const randomNumber = () => Math.floor(Math.random() * 255);



//BINDING
const defaultArea = () => {
  canvasMode[1].disabled = true;
  choosenMeasurments.textContent = `${measurmentsValue}x${measurmentsValue}`
  canvasArea.style.gridTemplateColumns = `repeat(${measurmentsValue}, 1fr)`//razumjeti
  canvasArea.style.gridTemplateRows = `repeat(${measurmentsValue}, 1fr)`//razumjeti
  for(let i = 0; i<(Number(measurmentsValue) * Number(measurmentsValue)); i++) { //proci, razmislit
    const minBox = document.createElement("div");
    minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
    canvasArea.appendChild(minBox)
  }
  const generatedBoxes = document.querySelectorAll('.etch-a-sketch__canvas-canvas-box-item');
  generatedBoxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
      resetBtn.addEventListener('click', () => {
        box.classList.remove('box');

      })
    })
  }); 
}

defaultArea()

areaMeasurments.addEventListener('input', (e) => {
  canvasMode[1].disabled = false
  measurmentsValue = e.target.value;
  choosenMeasurments.textContent = `${measurmentsValue}x${measurmentsValue}`;
  canvasArea.style.gridTemplateColumns = `repeat(${measurmentsValue}, 1fr)`//razumjeti
  canvasArea.style.gridTemplateRows = `repeat(${measurmentsValue}, 1fr)`//razumjeti
  canvasArea.innerHTML = ''
  for(let i = 0; i<(Number(measurmentsValue) * Number(measurmentsValue)); i++) { //proci, razmislit
    const minBox = document.createElement("div");
    minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
    canvasArea.appendChild(minBox)
  }

  resetBtn.addEventListener('click', () => {
    canvasMode[1].disabled = true;
    measurmentsValue = initalValueCopy;
    areaMeasurments.value = measurmentsValue;
    choosenMeasurments.textContent = `${measurmentsValue}x${measurmentsValue}`;
    canvasArea.style.gridTemplateColumns = `repeat(${measurmentsValue}, 1fr)`//razumjeti
    canvasArea.style.gridTemplateRows = `repeat(${measurmentsValue}, 1fr)`//razumjeti
    canvasArea.innerHTML = ''
    for(let i = 0; i<(Number(measurmentsValue) * Number(measurmentsValue)); i++) { //proci, razmislit
      const minBox = document.createElement("div");
      minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
      canvasArea.appendChild(minBox)
    }
  });

  
  const generatedBoxes = document.querySelectorAll('.etch-a-sketch__canvas-canvas-box-item');
  generatedBoxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
      resetBtn.addEventListener('click', () => {
        box.classList.remove('box');
        canvasMode[1].disabled = true;
        measurmentsValue = initalValueCopy;
        areaMeasurments.value = measurmentsValue;
        choosenMeasurments.textContent = `${measurmentsValue}x${measurmentsValue}`;
        canvasArea.style.gridTemplateColumns = `repeat(${measurmentsValue}, 1fr)`//razumjeti
        canvasArea.style.gridTemplateRows = `repeat(${measurmentsValue}, 1fr)`//razumjeti
        canvasArea.innerHTML = ''
        for(let i = 0; i<(Number(measurmentsValue) * Number(measurmentsValue)); i++) { //proci, razmislit
          const minBox = document.createElement("div");
          minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
          canvasArea.appendChild(minBox)
        }
      })
    })
  }); 
})


canvasMode.forEach((btn) => {
  btn.addEventListener('click', (e) => {
   if(e.target.dataset.mode === 'small') {
    e.target.disabled = true;
    canvasMode[1].disabled = false;
    canvasMode[2].disabled = false;
    const classes = canvasArea.classList
    let temp = [];
    classes.forEach((value) => {
      if(value !== 'etch-a-sketch__canvas-canvas-box') {
        temp.push(value)
      }
    temp.forEach((nameOfClass) => {
      classes.remove(nameOfClass);
    })
    });
    canvasArea.innerHTML = '';
    canvasArea.classList.add('etch-a-sketch__canvas-canvas-box--mode-small');
    const measures = getComputedStyle(canvasArea);
    const columns = measures.getPropertyValue('grid-template-columns');
    const rows = measures.getPropertyValue('grid-template-rows');
    for(let i = 0; i<(Number(columns.split(' ').length) * Number(rows.split(' ').length)); i++) { //proci, razmislit
          const minBox = document.createElement("div");
          minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
          canvasArea.appendChild(minBox)

          
        }
    

   } else if(e.target.dataset.mode === 'medium') {
    e.target.disabled = true;
    canvasMode[0].disabled = false;
    canvasMode[2].disabled = false;
    const classes = canvasArea.classList
    let temp = [];
    classes.forEach((value) => {
      if(value !== 'etch-a-sketch__canvas-canvas-box') {
        temp.push(value)
      }
    temp.forEach((nameOfClass) => {
      classes.remove(nameOfClass);
    })
    });
    canvasArea.innerHTML = '';
    canvasArea.classList.add('etch-a-sketch__canvas-canvas-box--mode-medium');
    const measures = getComputedStyle(canvasArea);
    const columns = measures.getPropertyValue('grid-template-columns');
    const rows = measures.getPropertyValue('grid-template-rows');
    for(let i = 0; i<(Number(columns.split(' ').length) * Number(rows.split(' ').length)); i++) { //proci, razmislit
          const minBox = document.createElement("div");
          minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
          canvasArea.appendChild(minBox)

          
        }

   } 
    else if(e.target.dataset.mode === 'large') {
    e.target.disabled = true;
    canvasMode[0].disabled = false;
    canvasMode[1].disabled = false;
    const classes = canvasArea.classList
    let temp = [];
    classes.forEach((value) => {
      if(value !== 'etch-a-sketch__canvas-canvas-box') {
        temp.push(value)
      }
    temp.forEach((nameOfClass) => {
      classes.remove(nameOfClass);
    })
    });
    canvasArea.innerHTML = '';
    canvasArea.classList.add('etch-a-sketch__canvas-canvas-box--mode-large');
    const measures = getComputedStyle(canvasArea);
    const columns = measures.getPropertyValue('grid-template-columns');
    const rows = measures.getPropertyValue('grid-template-rows'); 
    for(let i = 0; i<(Number(columns.split(' ').length) * Number(rows.split(' ').length)); i++) { //proci, razmislit
          const minBox = document.createElement("div");
          minBox.classList.add('etch-a-sketch__canvas-canvas-box-item')
          canvasArea.appendChild(minBox)
          
        } 
    
   }
  })
})




