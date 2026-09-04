// ZONA EDITABLE — canvia aquí el número i els productes
const WHATSAPP = "34679730150";
const NUM_TELEFON_RESTAURANT = "34679730150";

const PRODUCTES = [
  // A l'ast
  { nom: "Pollastre sencer a l'ast", preu: 13.00, img: "img/pollastre.jpg", categoria: "A l'ast" },
  { nom: "Mig pollastre", preu: 8.00, img: "img/Mig_pollastre.jpeg", categoria: "A l'ast" },

  // Entrants i Acompanyaments
  { nom: "Empanada de tonyina amb tomàquet", preu: 4.50, img: "img/empanada_tonyina.jpeg", categoria: "Entrants i Acompanyaments" },
  //{ nom: "Amanida de pasta", preu: 7.00, img: "img/ensalada_pasta_pesto.jpeg", categoria: "Entrants i Acompanyaments" },
  //{ nom: "Amanida de cigrons amb formatge feta" , preu: 7.00, img: "img/ensalada_cigrons.jpeg", categoria: "Entrants i Acompanyaments" },
  { nom: "Ensaladilla russa", preu: 7.50, img: "img/ensaladilla.jpeg", categoria: "Entrants i Acompanyaments" },
  //{ nom: "Amanida de pebrot escalivat amb allada d'all i oli", preu: 7.50, img: "img/Pimientos-asados-al-ajillo.jpeg", categoria: "Entrants i Acompanyaments" },
  { nom: "Crema freda de tomàquet", preu: 4.50, img: "img/Gazpacho.jpg", categoria: "Entrants i Acompanyaments" },
  //{ nom: "Escalivada", preu: 7.50, img: "img/Escalivada.jpeg", categoria: "Entrants i Acompanyaments" },
  { nom: "Pebrots del piquillo farcits de brandada de bacallà (3 ud)", preu: 6.50, img: "img/Pebrots_farcits.jpeg", categoria: "Plats Cuinats" },
  //{ nom: "Arròs de les tres delícies", preu: 7.00, img: "img/Arròs_de_les_tres_delícies.jpeg", categoria: "Plats Cuinats" },

  // Plats Cuinats
  //{ nom: "Galta de porc al vi negre", preu: 8.50, img: "img/galta.jpeg", categoria: "Plats Cuinats" },
  //{ nom: "Empedrat de bacallà amb olives negres i ceba vermella", preu: 7.00, img: "img/empedrat-foto-cerca.jpg", categoria: "Plats Cuinats" },
  //{ nom: "Conill en salsa de cacauet amb patates al forn", preu: 7.50, img: "img/conill_almendras.jpeg", categoria: "Plats Cuinats" },
  //{ nom: "Calamars farcits de mar i muntanya", preu: 6.50, img: "img/calamares-mar-montaña.jpg", categoria: "Plats Cuinats" },
  //{ nom: "Rap a la marinera amb cloïsses", preu: 9.00, img: "img/rap_a_la_marinera_amb_cloisses.jpg", categoria: "Plats Cuinats" },
  //{ nom: "Mandonguilles en salsa de pebrots i pimentó fumat", preu: 6.50, img: "img/mandonguilles.jpg", categoria: "Plats Cuinats" },
  //{ nom: "Tonyina en escabetx amb tomàquet", preu: 10.00, img: "img/tonyina_escabetx.jpeg", categoria: "Plats Cuinats" },
  //{ nom: "Nyoquis a la bolonyesa", preu: 7.00, img: "img/nyoquis_bolonyesa.jpeg", categoria: "Plats Cuinats" },
  { nom: "Conill amb cargols", preu: 8.50, img: "img/conill_amb_cargols.jpeg.webp", categoria: "Plats Cuinats"},
  { nom: "Fricandó amb bolets", preu: 8.50, img: "img/Fricandó amb bolets.jpeg", categoria: "Plats Cuinats" },
  
  // Croquetes i patates
  { nom: "1 Patata al caliu", preu: 0.50, img: "img/caliu.jpeg", categoria: "Croquetes i Patates" },
  { nom: "1 Croqueta de pollastre rostit", preu: 1.50, img: "img/Croqueta de pollastre rostit.jpeg", categoria: "Croquetes i Patates" },
  { nom: "1 Croqueta de pernil ibèric", preu: 2.00, img: "img/Croqueta de pernil iberic.jpeg", categoria: "Croquetes i Patates" },
  //{ nom: "1 Croqueta de gamba", preu: 2.00, img: "img/Croqueta de pollastre rostit.jpeg", categoria: "Croquetes i Patates" }, 

  // Arrossos i Pasta
  { nom: "Macarrons a la bolonyesa", preu: 7.00, img: "img/Macarrons_bolonyesa.jpg", categoria: "Arrossos i Pasta" },
  //{ nom: "Macarrons a la catalana", preu: 7.00, img: "img/Macarrons a la catalana.jpeg", categoria: "Arrossos i Pasta" },
  //{ nom: "Arròs de calamars i gambes (la ració)", preu: 15.00, img: "img/paella_gambas.jpeg", categoria: "Arrossos i Pasta" },
  { nom: "Canelons de Can Rostit (3 ud)", preu: 6.50, img: "img/canelones.jpeg", categoria: "Arrossos i Pasta" },
  { nom: "Canelons de Can Rostit (6 ud)", preu: 12.00, img: "img/canelones.jpeg", categoria: "Arrossos i Pasta" },

  // Salses i Complements
  { nom: "Pa fet del dia", preu: 1.20, img: "img/pa.jpg", categoria: "Salses i Complements" },
  { nom: "Allioli", preu: 1.50, img: "img/alioli.jpeg", categoria: "Salses i Complements" },

  // Begudes
  { nom: "Vi negre Etiris GX d'Alella", preu: 15.00, img: "img/vi_vermell.jpg", categoria: "Begudes" },
  { nom: "Vi blanc Etiris PB d'Alella", preu: 15.00, img: "img/vi_blanc.jpg", categoria: "Begudes" },
  { nom: "Cava", preu: 6.00, img: "img/cava.jpeg", categoria: "Begudes" },
  { nom: "Ampolla d'aigua (1L)", preu: 1.50, img: "img/font_dor.jpeg", categoria: "Begudes" },
  { nom: "Refrescos", preu: 1.50, img: "img/refrescos.jpeg", categoria: "Begudes" }
];

const CISTELL_KEY = 'canrostit_cistell';
const MENUS_KEY = 'canrostit_menus_cistell';

// Menús fixos (han de coincidir amb els definits a menus.js)
const MENUS = [
  { nom: "Menú per a 4", preu: 40.00, categoria: "Menús" }
];

const cistell = {};
const llista = document.getElementById('llista');
const resum = document.getElementById('resum');
const btn = document.getElementById('enviar');

// Inicialitzem el cistell de la comanda, recuperant-lo si ja existia guardat
let cistellGuardat = {};
try {
  cistellGuardat = JSON.parse(localStorage.getItem(CISTELL_KEY)) || {};
} catch (e) {
  cistellGuardat = {};
}
PRODUCTES.forEach((_, i) => cistell[i] = cistellGuardat[i] || 0);

// Recuperem també la selecció de menús feta a menus.html
function llegeixCistellMenus() {
  try {
    return JSON.parse(localStorage.getItem(MENUS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

// Guarda el cistell actual al localStorage
function guardaCistell() {
  try {
    localStorage.setItem(CISTELL_KEY, JSON.stringify(cistell));
  } catch (e) {
    // Si falla (mode privat, etc.) no passa res greu, simplement no persistirà
  }
}

// Agrupem els productes segons la seva categoria
const categories = {};
PRODUCTES.forEach((p, index) => {
  if (!categories[p.categoria]) {
    categories[p.categoria] = [];
  }
  categories[p.categoria].push({ ...p, originalIndex: index });
});

// Renderitzem les categories i els productes al DOM
llista.innerHTML = '';
llista.className = 'categories-container';

for (const [catNom, prods] of Object.entries(categories)) {
  const catDiv = document.createElement('div');
  catDiv.className = 'categoria';

  const titol = document.createElement('h3');
  titol.className = 'categoria-titol';
  titol.textContent = catNom;
  catDiv.appendChild(titol);

  const grid = document.createElement('div');
  grid.className = 'llista-productes';

  prods.forEach((p) => {
    const i = p.originalIndex;
    const el = document.createElement('div');
    el.className = 'producte' + (cistell[i] > 0 ? ' actiu' : '');
    el.id = 'prod-' + i;
    el.innerHTML = `
      <div class="imatge">
        <img class="foto-plat" src="${p.img}" alt="${p.nom}">
      </div>
      <div class="info">
        <div class="nom">${p.nom}</div>
        <div class="preu">${p.preu.toFixed(2)} €</div>
        <div class="stepper">
          <button aria-label="Treure" onclick="canvia(${i},-1)">−</button>
          <div class="qty" id="qty-${i}">${cistell[i]}</div>
          <button aria-label="Afegir" onclick="canvia(${i},1)">+</button>
        </div>
      </div>`;
    grid.appendChild(el);
  });

  catDiv.appendChild(grid);
  llista.appendChild(catDiv);
}

// Funció per afegir o treure quantitat d'un producte
function canvia(i, d) {
  cistell[i] = Math.max(0, cistell[i] + d);
  document.getElementById('qty-' + i).textContent = cistell[i];
  document.getElementById('prod-' + i).classList.toggle('actiu', cistell[i] > 0);
  guardaCistell();
  pintaResum();
}

// Funció per actualitzar el resum inferior
function pintaResum() {
  let total = 0, n = 0, linies = '';
  PRODUCTES.forEach((p, i) => {
    if (cistell[i] > 0) {
      const sub = p.preu * cistell[i];
      total += sub; 
      n += cistell[i];
      linies += `<div class="linia"><span>${cistell[i]}× ${p.nom}</span><span>${sub.toFixed(2)} €</span></div>`;
    }
  });

  const cistellMenus = llegeixCistellMenus();
  MENUS.forEach((m, i) => {
    const qty = cistellMenus[i] || 0;
    if (qty > 0) {
      const sub = m.preu * qty;
      total += sub;
      n += qty;
      linies += `<div class="linia"><span>${qty}× ${m.nom}</span><span>${sub.toFixed(2)} €</span></div>`;
    }
  });

  resum.innerHTML = n === 0
    ? `<div class="buit">Encara no has triat res 🍗</div>`
    : linies + `<div class="linia total"><span>Total</span><span>${total.toFixed(2)} €</span></div>`;
  btn.disabled = n === 0;
}

// Acció del botó per enviar el missatge a WhatsApp
btn.addEventListener('click', () => {
  const dia = document.getElementById('dia').value;
  const hora = document.getElementById('hora').value;
  const nom = document.getElementById('nom').value.trim();
  const notes = document.getElementById('notes').value.trim();

  let total = 0;
  let txt = '*NOVA COMANDA · Can Rostit*\n\n';
  PRODUCTES.forEach((p, i) => {
    if (cistell[i] > 0) {
      const sub = p.preu * cistell[i];
      total += sub;
      txt += `• ${cistell[i]}× ${p.nom} — ${sub.toFixed(2)} €\n`;
    }
  });

  const cistellMenus = llegeixCistellMenus();
  MENUS.forEach((m, i) => {
    const qty = cistellMenus[i] || 0;
    if (qty > 0) {
      const sub = m.preu * qty;
      total += sub;
      txt += `• ${qty}× ${m.nom} — ${sub.toFixed(2)} €\n`;
    }
  });

  txt += `\n*Total: ${total.toFixed(2)} €*\n\n`;
  txt += `Client: ${nom || '(sense nom)'}\n`;
  txt += `Recollida: ${dia || '(dia?)'} a les ${hora || '(hora?)'}\n`;
  if (notes) txt += `Notes: ${notes}\n`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, '_blank');

  // Un cop enviada la comanda, buidem els dos cistells perquè la propera comanda comenci de zero
  PRODUCTES.forEach((_, i) => { cistell[i] = 0; });
  localStorage.removeItem(CISTELL_KEY);
  localStorage.removeItem(MENUS_KEY);
  PRODUCTES.forEach((_, i) => {
    const qtyEl = document.getElementById('qty-' + i);
    const prodEl = document.getElementById('prod-' + i);
    if (qtyEl) qtyEl.textContent = 0;
    if (prodEl) prodEl.classList.remove('actiu');
  });
  pintaResum();
});

pintaResum();


function inicialitzarModalSubscripcio() {
  const jaVist = localStorage.getItem("subscripcio-mostrada");
  if (jaVist) return;

  const modal = document.getElementById("modal-subscripcio");
  modal.hidden = false;

  document.getElementById("btn-subscriure").addEventListener("click", () => {
    const telefon = document.getElementById("input-telefon-subscripcio").value.trim();
    if (!telefon) {
      alert("Si us plau, introdueix un número de telèfon.");
      return;
    }
    const missatge = `Hola! Vull apuntar-me a les novetats de Can Rostit. El meu número és ${telefon}`;
    const url = `https://wa.me/${NUM_TELEFON_RESTAURANT}?text=${encodeURIComponent(missatge)}`;
    window.open(url, "_blank");
    localStorage.setItem("subscripcio-mostrada", "true");
    modal.hidden = true;
  });

  document.getElementById("btn-ara-no").addEventListener("click", () => {
    localStorage.setItem("subscripcio-mostrada", "true");
    modal.hidden = true;
  });

  document.getElementById("tancar-modal").addEventListener("click", () => {
    localStorage.setItem("subscripcio-mostrada", "true");
    modal.hidden = true;
  });
}

document.addEventListener("DOMContentLoaded", inicialitzarModalSubscripcio);