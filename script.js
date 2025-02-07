const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

const colorPicker = document.getElementById("colorPicker");

// Función para actualizar el color desde los sliders o inputs numéricos
function updateColor() {
    let red = parseInt(redRange.value);
    let green = parseInt(greenRange.value);
    let blue = parseInt(blueRange.value);

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    let hex = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    hexCode.textContent = hex.toUpperCase();

    colorPicker.value = hex.toUpperCase();
}

// Función para actualizar desde el color picker
function updateFromColorPicker() {
    let hex = colorPicker.value;
    let red = parseInt(hex.substring(1, 3), 16);
    let green = parseInt(hex.substring(3, 5), 16);
    let blue = parseInt(hex.substring(5, 7), 16);

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex.toUpperCase();
}

// Función para actualizar sliders desde inputs numéricos
function updateSliders() {
    let red = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
    let green = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
    let blue = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    updateColor();
}

// Eventos para los sliders
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Eventos para los inputs numéricos
redInput.addEventListener("input", updateSliders);
greenInput.addEventListener("input", updateSliders);
blueInput.addEventListener("input", updateSliders);

// Evento para el color picker
colorPicker.addEventListener("input", updateFromColorPicker);

// Inicializar con negro
updateColor();


