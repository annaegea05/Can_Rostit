const WHATSAPP = "34679730150";

const MENUS = [
  { nom: "Menú per a 4", preu: 40.00, img: "img/menu4.jpg", categoria: "Menús" }
];

const cistell = {};
const llista = document.getElementById('llista-menus');
const resum = document.getElementById('resum');
const btn = document.getElementById('enviar');

// Inicialitzem el cistell
MENUS.forEach((_, i) => cistell[i] = 0);

// Agrupem els menús per categoria (igual que fa script.js amb els productes)
const categories = {};
MENUS.forEach((p, index) => {
  if (!categories[p.categoria]) {
    categories[p.categoria] = [];
  }
  categories[p.categoria].push({ ...p, originalIndex: index });
});

// Renderitzem els menús al DOM
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

// Afegir o treure quantitat d'un menú
function canvia(i, d) {
  cistell[i] = Math.max(0, cistell[i] + d);
  document.getElementById('qty-' + i).textContent = cistell[i];
  document.getElementById('prod-' + i).classList.toggle('actiu', cistell[i] > 0);
  pintaResum();
}

// Actualitzem el resum inferior
function pintaResum() {
  let total = 0, n = 0, linies = '';
  MENUS.forEach((p, i) => {
    if (cistell[i] > 0) {
      const sub = p.preu * cistell[i];
      total += sub;
      n += cistell[i];
      linies += `<div class="linia"><span>${cistell[i]}× ${p.nom}</span><span>${sub.toFixed(2)} €</span></div>`;
    }
  });
  resum.innerHTML = n === 0
    ? `<div class="buit">Encara no has triat cap menú 🍗</div>`
    : linies + `<div class="linia total"><span>Total</span><span>${total.toFixed(2)} €</span></div>`;
  btn.disabled = n === 0;
}

// Enviar la comanda de menú per WhatsApp
btn.addEventListener('click', () => {
  const dia = document.getElementById('dia').value;
  const hora = document.getElementById('hora').value;
  const nom = document.getElementById('nom').value.trim();
  const notes = document.getElementById('notes').value.trim();

  let total = 0;
  let txt = '*NOVA COMANDA DE MENÚ · Cal Rustit*\n\n';
  MENUS.forEach((p, i) => {
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