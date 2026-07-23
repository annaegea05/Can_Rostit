// ZONA EDITABLE — canvia aquí el número i els productes
const WHATSAPP = "34679730150";

const PRODUCTES = [
  { nom: "Pollastre sencer a l'ast", preu: 13.00, img: "img/pollastre.jpg" },
  { nom: "Mig pollastre", preu: 8.00, img: "img/pollastre.jpg" },
  { nom: "1 Patata al caliu", preu: 0.50, img: "img/pollastre.jpg" },
  { nom: "Amanida de pasta", preu: 7.00, img: "img/pollastre.jpg" },
  { nom: "Ensaladilla russa", preu: 8.00, img: "img/pollastre.jpg" },
  { nom: "Macarrons a la catalana", preu: 9.00, img: "img/pollastre.jpg" },
  { nom: "Galta de porc al vi negre", preu: 6.00, img: "img/pollastre.jpg" },
  { nom: "Fricandó amb bolets", preu: 8.50, img: "img/pollastre.jpg" },
  { nom: "1 Croqueta de pollastre rostit", preu: 1.50, img: "img/pollastre.jpg" },
  { nom: "1 Croqueta de pernil ibèric", preu: 2.00, img: "img/pollastre.jpg" },
  { nom: "1 Croqueta de gamba", preu: 2.00, img: "img/pollastre.jpg" },
  { nom: "Bacallà amb tomàquet", preu: 9.00, img: "img/pollastre.jpg" },
  { nom: "Pop a la gallega", preu: 15.00, img: "img/pollastre.jpg" },
  { nom: "Arròs de secret i costella (la ració)", preu: 7.50, img: "img/pollastre.jpg" },
  { nom: "Canelons de Can Rostit", preu: 7.50, img: "img/pollastre.jpg" },
  { nom: "Esqueixada de bacallà", preu: 8.00, img: "img/pollastre.jpg" },
  { nom: "Escalivada", preu: 7.50, img: "img/pollastre.jpg" },
  { nom: "Truita de patates amb ceba (la ració)", preu: 2.50, img: "img/pollastre.jpg" },
  { nom: "Gaspatxo tradicional", preu: 4.50, img: "img/pollastre.jpg" },
  { nom: "Pa fet del dia", preu: 1.50, img: "img/pa.jpg" },
  { nom: "Allioli", preu: 1.50, img: "img/alioli.jpeg" },
  { nom: "Cava Marfil d'Alella", preu: 12.00, img: "img/cava.jpeg" },
  { nom: "Vi negre Raventós d'Alella", preu: 12.00, img: "img/vi_negre.jpeg" },
  { nom: "Vi blanc Raventós d'Alella", preu: 12.00, img: "img/vi_blanc.jpeg" },
  { nom: "Vermut negre d'Alella", preu: 12.00, img: "img/vermut.jpeg" }
];

const cistell = {};
const llista = document.getElementById('llista');
const resum = document.getElementById('resum');
const btn = document.getElementById('enviar');

// Pinta la llista de productes
PRODUCTES.forEach((p, i) => {
  cistell[i] = 0;
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
  llista.appendChild(el);
});

function canvia(i, d) {
  cistell[i] = Math.max(0, cistell[i] + d);
  document.getElementById('qty-' + i).textContent = cistell[i];
  document.getElementById('prod-' + i).classList.toggle('actiu', cistell[i] > 0);
  pintaResum();
}

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