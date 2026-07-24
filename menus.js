const MENUS_KEY = 'canrostit_menus_cistell';

const MENUS = [
  { nom: "Menú per a 4", preu: 40.00, img: "img/menu4.jpg", categoria: "Menús" }
];

const cistell = {};
const llista = document.getElementById('llista-menus');

// Recuperem seleccions prèvies si ja n'hi havia (per exemple, si abans has estat a index.html)
let cistellGuardat = {};
try {
  cistellGuardat = JSON.parse(localStorage.getItem(MENUS_KEY)) || {};
} catch (e) {
  cistellGuardat = {};
}
MENUS.forEach((_, i) => cistell[i] = cistellGuardat[i] || 0);

// Guarda la selecció de menús al localStorage
function guardaCistell() {
  try {
    localStorage.setItem(MENUS_KEY, JSON.stringify(cistell));
  } catch (e) {
    // Si falla (mode privat, etc.) no passa res greu, simplement no persistirà
  }
}

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

// Afegir o treure quantitat d'un menú i desar-ho
function canvia(i, d) {
  cistell[i] = Math.max(0, cistell[i] + d);
  document.getElementById('qty-' + i).textContent = cistell[i];
  document.getElementById('prod-' + i).classList.toggle('actiu', cistell[i] > 0);
  guardaCistell();
}