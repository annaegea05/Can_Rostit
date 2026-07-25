const WHATSAPP = "34679730150";

const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const nom = document.getElementById('nom');
const notes = document.getElementById('notes');
const btn = document.getElementById('enviar');

// El botó només s'activa quan hi ha alguna cosa escrita a "notes"
function actualitzaBoto() {
  btn.disabled = notes.value.trim().length === 0;
}
notes.addEventListener('input', actualitzaBoto);
actualitzaBoto();

btn.addEventListener('click', () => {
  const textNotes = notes.value.trim();
  if (!textNotes) return;

  let txt = '*ENCÀRREC ESPECIAL · Cal Rostit*\n\n';
  txt += `${textNotes}\n\n`;
  txt += `Client: ${nom.value.trim() || '(sense nom)'}\n`;
  txt += `Recollida: ${dia.value || '(dia?)'} a les ${hora.value || '(hora?)'}\n`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, '_blank');
});