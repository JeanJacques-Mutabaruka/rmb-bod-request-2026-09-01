/* plan.js — action plan filtering, search and per-activity detail rows. */
function rowToggle(btn) {
  const row = btn.closest('tr');
  const det = row.nextElementSibling;
  if (!det || !det.classList.contains('detail-row')) return;
  const open = det.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.textContent = open ? '\u2212' : '+';
  btn.setAttribute('aria-expanded', open);
  if (open && window.rmbAnnotate) window.rmbAnnotate(det);
}
function expandAll()   { document.querySelectorAll('.plan-table .xbtn:not(.open)').forEach(rowToggle); }
function collapseAll() { document.querySelectorAll('.plan-table .xbtn.open').forEach(rowToggle); }

let curWS = 'all', curQ = '';
function wsFilter(btn) {
  curWS = btn.dataset.ws;
  document.querySelectorAll('.plan-controls .chip[data-ws]').forEach(c => c.classList.toggle('active', c === btn));
  applyFilter();
}
function planSearch() { curQ = (document.getElementById('plan-q').value || '').toLowerCase(); applyFilter(); }

function applyFilter() {
  let shown = 0, total = 0;
  document.querySelectorAll('.plan-table tr.act-row').forEach(row => {
    total++;
    const okWS = (curWS === 'all' || row.dataset.ws === curWS);
    const okQ  = (!curQ || (row.dataset.search || '').includes(curQ));
    const show = okWS && okQ;
    row.style.display = show ? '' : 'none';
    const det = row.nextElementSibling;
    if (det && det.classList.contains('detail-row')) {
      det.style.display = show ? '' : 'none';
      if (!show) { det.classList.remove('open'); const b = row.querySelector('.xbtn');
                   if (b) { b.classList.remove('open'); b.textContent = '+'; } }
    }
    if (show) shown++;
  });
  document.querySelectorAll('.plan-table tr.ws-row').forEach(row => {
    const ws = row.dataset.ws;
    const any = [...document.querySelectorAll('.plan-table tr.act-row[data-ws="' + ws + '"]')]
                .some(r => r.style.display !== 'none');
    row.style.display = any ? '' : 'none';
  });
  const c = document.getElementById('plan-count');
  if (c) c.textContent = shown + ' of ' + total + ' activities';
}
document.addEventListener('DOMContentLoaded', applyFilter);
