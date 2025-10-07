/*Here are the dynamics for everything regarding 
agregar aviso page
*/

//menú de comunas dependiente de la región 
const data = {

    Región_Metropolitana: [""],
    Arica_y_Parinacota: [],
    Tarapacá: [],
    Antofagasta:[], 
    Atacama: [],
    Coquimbo: [],
    Valparaiso: [], 
    OHiggins: [],
    Maule: [],
    Ñuble: [],
    Biobío: [],
    La_Araucanía: [],
    Los_Ríos: [],
    Los_Lagos: [],
    Aysén: [],
    Magallanes_y_la_Antártica_Chilena:[],
};

function updateComunaMenu(regionSelection) {
  const comunaMenu = document.getElementById("comunaMenu");
  comunaMenu.innerHTML = '<option value="">-- Select --</option>'; // Clear existing options

  if (regionSelection) {
    const items = data[regionSelection];
    items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.textContent = item;
      comunaMenu.appendChild(option);
    });
    comunaMenu.disabled = false; // Enable the comuna menu
  } else {
    comunaMenu.disabled = true; // Disable if no region selection
  }
}