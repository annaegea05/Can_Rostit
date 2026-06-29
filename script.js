// ZONA EDITABLE — canvia aquí el número i els productes - No cal tocar res més del codi.                                 ║

// 1) NÚMERO DE WHATSAPP (amb prefix, sense + ni espais ni 00)
  //    Exemple Espanya: 34612345678
  const WHATSAPP = "34633774970";

  // 2) PRODUCTES  ->  { nom: "...", preu: 0.00 }
  //    Per afegir-ne un, copia una línia. Per treure'n un, esborra-la.
  const PRODUCTES = [
    { nom: "Pollastre sencer a l'ast", preu: 12.50 },
    { nom: "Mig pollastre",            preu: 7.00  },
    { nom: "Costelles de porc",        preu: 9.50  },
    { nom: "Conill a l'ast",           preu: 13.00 },
    { nom: "Patates rostides",         preu: 3.50  },
    { nom: "Pa amb tomàquet",          preu: 2.50  },
  ];
  
    const cistell = {};            // { index: quantitat }
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
      <div class="info">
        <div class="nom">${p.nom}</div>
        <div class="preu">${p.preu.toFixed(2)} €</div>
      </div>
      <div class="stepper">
        <button aria-label="Treure" onclick="canvia(${i},-1)">−</button>
        <div class="qty" id="qty-${i}">0</div>
        <button aria-label="Afegir" onclick="canvia(${i},1)">+</button>
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
          total += sub; n += cistell[i];
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
