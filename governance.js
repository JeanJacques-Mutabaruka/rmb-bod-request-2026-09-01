/* governance.js — RACI column highlight and the decision workflow stepper. */
function raciHi(i) {
  const t = document.getElementById('raci');
  if (!t) return;
  const idx = i + 1;
  const was = t.querySelectorAll('thead th')[idx].classList.contains('hi');
  t.querySelectorAll('th, td').forEach(c => c.classList.remove('hi'));
  if (!was) {
    t.querySelectorAll('tr').forEach(r => { const c = r.children[idx]; if (c) c.classList.add('hi'); });
  }
}
function showStep(i) {
  const s = WORKFLOW[i];
  document.querySelectorAll('.step').forEach((b, j) =>
    b.setAttribute('aria-selected', String(i === j)));
  const d = document.getElementById('stepdet');
  d.innerHTML = '<p>' + s.desc + '</p><div class="sm"><span><b>Who:</b> ' + s.who +
                '</span><span><b>Service level:</b> ' + s.sla + '</span></div>';
  if (window.rmbAnnotate) window.rmbAnnotate(d);
}
document.addEventListener('DOMContentLoaded', function () { showStep(0); });
