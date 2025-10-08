/*Here are the corresponding validations for everything regarding 
agregar aviso page
*/
//Validar todo
function validateAll(){
    validateRegion();
    validateComuna();
    validateNombre();
    validateEmail();
    validateTipo();
    validateCantidad();
    validateEdad();
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

//EMAIL
function validateEmail() {
  const email = document.getElementById("email");
  const emailLimpio = email.value.trim(); // Get value and remove whitespace
  const errorEmailMessage = document.getElementById("errorEmailMessage");

  if (emailLimpio == "") {
    errorEmailMessage.textContent = "Debe colocar un email";
    errorEmailMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorEmailMessage.textContent = ""; // Quitar mensaje
    errorEmailMessage.style.display = "none";
    return true;
  }
}

//TELÉFONO: opcional así que verificar en caso que se ingrese que cumpla con el fromato

//CONTACTAR POR: opcional opcional. Máximo 5. El input de información de ID o URL
//debe permitir mínimo 4 caracteres y máximo 50.


//----------------------------- SECCIÓN MASCOTA ---------------------------

// TIPO

function validateTipo() { 
  const tipo = document.getElementById("Tipo");
  const errorTipoMessage = document.getElementById("errorTipoMessage");

  if (tipo.value == "") {
    errorTipoMessage.textContent = "Debe seleccionar el tipo de animal";
    errorTipoMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorTipoMessage.textContent = ""; // Quitar mensaje
    errorTipoMessage.style.display = "none";
    return true;
  }
}

// CANTIDAD 

function validateCantidad() { 
  const cantidad = document.getElementById("Cantidad");
  const errorCantidadMessage = document.getElementById("errorCantidadMessage");

  if (cantidad.value == "") {
    errorCantidadMessage.textContent = "Debe seleccionar una cantidad";
    errorCantidadMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorCantidadMessage.textContent = ""; // Quitar mensaje
    errorCantidadMessage.style.display = "none";
    return true;
  }
}

// EDAD 

function validateEdad() { 
  const edad = document.getElementById("Edad");
  const errorEdadMessage = document.getElementById("errorEdadMessage");

  if (edad.value == "") {
    errorEdadMessage.textContent = "Debe seleccionar una edad";
    errorEdadMessage.style.display = "inline";
    // campo vacío, no se puede mandar el forms
    return false; 
  } else {
    // campo completado correctamente
    errorEdadMessage.textContent = ""; // Quitar mensaje
    errorEdadMessage.style.display = "none";
    return true;
  }
}
