/* gantt.js — workstream filtering on the schedule page. */
function ganttFilter(btn) {
  const ws = btn.dataset.ws;
  document.querySelectorAll('.plan-controls .chip[data-ws]').forEach(c => c.classList.toggle('active', c === btn));
  let current = null;
  document.querySelectorAll('#gantt tbody tr').forEach(row => {
    if (row.classList.contains('g-ws')) {
      current = (row.querySelector('.g-ref') || {}).textContent.trim();
    }
    row.style.display = (ws === 'all' || current === ws) ? '' : 'none';
  });
}
