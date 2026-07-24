const WHATSAPP = "34679730150";

const PRODUCTES = [
  // A l'ast
  { nom: "Pollastre sencer a l'ast", preu: 13.00, img: "img/pollastre.jpg", categoria: "A l'ast" },
  { nom: "Mig pollastre", preu: 8.00, img: "img/pollastre.jpg", categoria: "A l'ast" },
  
  // Entrants i Acompanyaments
  { nom: "1 Patata al caliu", preu: 0.50, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Amanida de pasta", preu: 7.00, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Ensaladilla russa", preu: 8.00, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Esqueixada de bacallà", preu: 8.00, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Escalivada", preu: 7.50, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Gaspatxo tradicional", preu: 4.50, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },
  { nom: "Truita de patates amb ceba (la ració)", preu: 2.50, img: "img/pollastre.jpg", categoria: "Entrants i Acompanyaments" },

  // Plats Cuinats
  { nom: "Galta de porc al vi negre", preu: 6.00, img: "img/pollastre.jpg", categoria: "Plats Cuinats" },
  { nom: "Fricandó amb bolets", preu: 8.50, img: "img/pollastre.jpg", categoria: "Plats Cuinats" },
  { nom: "Bacallà amb tomàquet", preu: 9.00, img: "img/pollastre.jpg", categoria: "Plats Cuinats" },
  { nom: "Pop a la gallega", preu: 15.00, img: "img/pollastre.jpg", categoria: "Plats Cuinats" },

  // Croquetes
  { nom: "1 Croqueta de pollastre rostit", preu: 1.50, img: "img/pollastre.jpg", categoria: "Croquetes" },
  { nom: "1 Croqueta de pernil ibèric", preu: 2.00, img: "img/croqueta-jamon.jpg", categoria: "Croquetes" },
  { nom: "1 Croqueta de gamba", preu: 2.00, img: "img/pollastre.jpg", categoria: "Croquetes" },

  // Arrossos i Pasta
  { nom: "Macarrons a la catalana", preu: 9.00, img: "img/pollastre.jpg", categoria: "Arrossos i Pasta" },
  { nom: "Arròs de secret i costella (la ració)", preu: 7.50, img: "img/pollastre.jpg", categoria: "Arrossos i Pasta" },
  { nom: "Canelons de Can Rostit", preu: 7.50, img: "img/pollastre.jpg", categoria: "Arrossos i Pasta" },

  // Salses i Complements
  { nom: "Pa fet del dia", preu: 1.50, img: "img/pa.jpg", categoria: "Salses i Complements" },
  { nom: "Allioli", preu: 1.50, img: "img/alioli.jpeg", categoria: "Salses i Complements" },

  // Begudes
  { nom: "Cava Marfil d'Alella", preu: 12.00, img: "img/cava.jpeg", categoria: "Begudes" },
  { nom: "Vi negre Raventós d'Alella", preu: 12.00, img: "img/vi_negre.jpeg", categoria: "Begudes" },
  { nom: "Vi blanc Raventós d'Alella", preu: 12.00, img: "img/vi_blanc.jpeg", categoria: "Begudes" },
  { nom: "Vermut negre d'Alella", preu: 12.00, img: "img/vermut.jpeg", categoria: "Begudes" },
  { nom: "Ampolla d'aigua (1L)", preu: 1.50, img: "img/font_dor.jpeg", categoria: "Begudes" }
];

const cistell = {};
const llista = document.getElementById('llista');
const resum = document.getElementById('resum');
const btn = document.getElementById('enviar');

// Inicialitzem el cistell de la comanda
PRODUCTES.forEach((_, i) => cistell[i] = 0);

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
    el.className = 'producte';
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
          <div class="qty" id="qty-${i}">0</div>
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
  let txt = '*NOVA COMANDA · Cal Rustit*\n\n';
  PRODUCTES.forEach((p, i) => {
    if (cistell[i] > 0) {
      const sub = p.preu * cistell[i];
      total += sub;
      txt += `• ${cistell[i]}× ${p.nom} — ${sub.toFixed(2)} €\n`;
    }
  });
  txt += `\n*Total: ${total.toFixed(2)} €*\n\n`;
  txt += `Client: ${nom || '(sense nom)'}\n`;
  txt += `Recollida: ${dia || '(dia?)'} a les ${hora || '(hora?)'}\n`;
  if (notes) txt += `Notes: ${notes}\n`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, '_blank');
});


pintaResum();