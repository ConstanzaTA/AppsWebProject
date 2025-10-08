/*Here are the dynamics for everything regarding 
agregar aviso page
*/

//menú de comunas dependiente de la región 
const data = {

    Región_Metropolitana: ["Colina", "Lampa", "Tiltil", "Puente Alto", "San José de Maipo", "Pirque", "Buin", "Calera de Tango", "Paine", "San Bernardo",
         "El Monte", "Isla de Maipo", "Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro", "Talagante", "Cerrillos", "Cerro Navia", "Conchalí", 
         "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "Las Condes", "La Reina", 
         "Lo Barnechea", "Lo Espejo", "Macul", "Maipú", "Ñuñoa", "Padre Hurtado", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quinta Normal", 
         "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura"],
    Arica_y_Parinacota: ["Arica", "Camarones", "Putre", "General Lagos"],
    Tarapacá: ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
    Antofagasta:["Antofagasta", "Calama", "Mejillones", "Taltal", "Tocopilla", "Sierra Gorda", "San Pedro de Atacama", "María Elena", "Ollagüe"], 
    Atacama: ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
    Coquimbo: ["Andacollo", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", 
        "Río Hurtado", "Salamanca", "Canela", "Vicuña"],
    Valparaiso: ["Valparaíso", "Viña del Mar", "Concón", "Puchuncaví", "Quintero", "Juan Fernández", "Casablanca", "Quilpué", "Limache", "Olmué", "Villa Alemana", 
        "Quillota", "La Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", 
        "Putaendo", "Llay Llay", "Santa María", "Panquehue", "Catemu", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", 
        "Petorca", "Zapallar"], 
    OHiggins: ["Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", 
        "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Vicente de Tagua Tagua", "Chepica", "Chimbarongo", "Chépica", "Paredones", "Peralillo", 
        "Pichilemu", "Pumanque", "Santa Cruz", "Navidad", "La Estrella", "Marchigüe", "Litueche"],
    Maule: ["Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Constitución", "Curepto", "Empedrado", 
        "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca", "Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier", 
        "Villa Alegre", "Yerbas Buenas", "Cauquenes", "Chanco", "Pelluhue"],
    Ñuble: ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", 
        "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    Biobío: ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", 
        "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", 
        "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tomé", "Tucapel", "Yumbel"],
    La_Araucanía: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", 
        "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", 
        "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica" ],
    Los_Ríos: ["Panguipulli", "Futrono", "Río Bueno", "Lago Ranco", "La Unión", "Corral", "Paillaco", "Valdivia", "Máfil", "Lanco", "Mariquina", "Los Lagos"],
    Los_Lagos: ["Osorno", "San Pablo", "Puyehue", "Puerto Octay", "Purranque", "Río Negro", "San Juan de la Costa", "Ancud", "Castro", "Curaco de Vélez", "Dalcahue", 
        "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Rilán"],
    Aysén: ["Aysén", "Cisnes", "Coyhaique", "Chile Chico", "Cochrane", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"],
    Magallanes_y_la_Antártica_Chilena:["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Punta Arenas", "Primavera", "Río Verde", "San Gregorio", 
        "Timaukel", "Torres del Paine"],
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