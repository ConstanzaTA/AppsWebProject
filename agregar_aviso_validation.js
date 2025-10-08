/*Here are the corresponding validations for everything regarding 
agregar aviso page
*/
//Validar todo
function validateAll(){
    validateRegion();
    validateComuna();
    validateNombre();
}

//-------------------------------------- SECCIÓN DÓNDE --------------------

//Validar campo de región
function validateRegion() { 
  const reg = document.getElementById("regionMenu");
  const errorRegionMessage = document.getElementById("errorRegionMessage");

  if (reg.value == "") {
    errorRegionMessage.textContent = "Debe seleccionar una región";
    errorRegionMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorRegionMessage.textContent = ""; // Quitar mensaje
    errorRegionMessage.style.display = "none";
    return true;
  }
}


//Validar campo de Comuna

function validateComuna() { 
  const com = document.getElementById("comunaMenu");
  const errorComunaMessage = document.getElementById("errorComunaMessage");

  if (com.value == "") {
    errorComunaMessage.textContent = "Debe seleccionar una comuna";
    errorComunaMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorComunaMessage.textContent = ""; // Quitar mensaje
    errorComunaMessage.style.display = "none";
    return true;
  }
}


//Validar campo de sector 
//  como no es obligatorio y está el atributo maxlength lo dejaré pendiente


//---------------------------------- SECCIÓN CONTACTO ---------------------

//NOMBRE
function validateNombre() {
  const nom = document.getElementById("Nombre");
  const nombreLimpio = nom.value.trim(); // Get value and remove whitespace
  const errorNombreMessage = document.getElementById("errorNombreMessage");

  if (nombreLimpio == "") {
    errorNombreMessage.textContent = "Debe colocar un nombre";
    errorNombreMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorNombreMessage.textContent = ""; // Quitar mensaje
    errorNombreMessage.style.display = "none";
    return true;
  }
}
// RECUERDA: falta agregar validación que contenga al menos 3 caracteres



/*


<input type="text" id="myInput">
<button onclick="validateInput()">Submit</button>

<script>
function validateInput() {
  const inputElement = document.getElementById('myInput');
  const inputValue = inputElement.value.trim(); // Get value and remove whitespace

  if (inputValue === "") {
    alert("Input cannot be empty!");
    // Optionally, prevent form submission or add visual feedback
    return false; // Prevent further action if validation fails
  } else {
    alert("Input is valid!");
    // Proceed with form submission or other actions
    return true;
  }
}
</script>*/