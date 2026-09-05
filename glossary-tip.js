/* glossary-tip.js — hover definitions for abbreviations, on every page. */
(function () {
  const GL = {
    "RMB":"Rwanda Mines, Petroleum and Gas Board",
    "CEO":"Chief Executive Officer of RMB",
    "CGO":"Chief Geo-Hazard Officer of RMB",
    "SPIU":"Single Project Implementation Unit, the RMB unit coordinating project financing and procurement",
    "WS1":"Workstream 1, company oversight through enforced reporting",
    "WS2":"Workstream 2, licence portfolio clean-up for mineral trading companies",
    "WS3":"Workstream 3, sector de-risking and financing framework",
    "WS4":"Workstream 4, prices predictability for processing-plant investors",
    "WS5":"Workstream 5, programme mobilisation and governance",
    "WS6":"Workstream 6, decision-making ecosystem, automation and artificial intelligence",
    "SO1":"Specific objective 1, visibility over licensed operators (WS1)",
    "SO2":"Specific objective 2, a licence register that reflects reality (WS2)",
    "SO3":"Specific objective 3, a de-risked sector that can be financed (WS3)",
    "SO4":"Specific objective 4, price predictability for processing-plant investors (WS4)",
    "SO5":"Specific objective 5, named owners, deadlines and reporting channels (WS5)",
    "RACI":"Responsibility matrix: who is Responsible, Accountable, Consulted and Informed",
    "KRI":"Key risk indicator, a measurable signal that a mapped risk is materialising",
    "RRA":"Rwanda Revenue Authority",
    "BNR":"National Bank of Rwanda",
    "MINECOFIN":"Ministry of Finance and Economic Planning",
    "RDB":"Rwanda Development Board",
    "DFI":"Development finance institution",
    "DFIs":"Development finance institutions",
    "LME":"London Metal Exchange, the reference market for tin and other base metals",
    "MoU":"Memorandum of understanding",
    "ESG":"Environmental, social and governance",
    "CSV":"Comma-separated values, a plain-text spreadsheet format",
    "AI":"Artificial intelligence",
    "IT":"Information technology"
  };
  const DPLUS = "Number of days counted from 1 September 2026, the day after the Board meeting";

  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const keys = Object.keys(GL).sort((a,b) => b.length - a.length)
                     .map(k => k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const RE  = new RegExp('(?<![A-Za-z0-9])(' + keys.join('|') + ')(?![A-Za-z0-9])','g');
  const RED = /(D\+\d+)/g;
  const SKIP = new Set(['SCRIPT','STYLE','TITLE','NOSCRIPT','BUTTON','INPUT']);

  function annotate(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = n.parentElement;
        while (p) {
          if (SKIP.has(p.tagName) || p.classList.contains('gl') ||
              p.classList.contains('gloss-grid') || p.classList.contains('sb-nav') ||
              p.id === 'tip') return NodeFilter.FILTER_REJECT;
          p = p.parentElement;
        }
        RE.lastIndex = 0; RED.lastIndex = 0;
        return (RE.test(n.nodeValue) || RED.test(n.nodeValue))
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const targets = []; let n;
    while ((n = walker.nextNode())) targets.push(n);
    targets.forEach(node => {
      const span = document.createElement('span');
      span.innerHTML = esc(node.nodeValue)
        .replace(RE,  m => '<span class="gl" tabindex="0" data-tip="' + esc(GL[m]) + '">' + m + '</span>')
        .replace(RED, m => '<span class="gl" tabindex="0" data-tip="' + esc(DPLUS) + '">' + m + '</span>');
      node.parentNode.replaceChild(span, node);
    });
  }
  window.rmbAnnotate = annotate;

  function showTip(el) {
    const tip = document.getElementById('tip');
    if (!tip) return;
    tip.textContent = el.dataset.tip;
    tip.style.display = 'block';
    const r = el.getBoundingClientRect(), t = tip.getBoundingClientRect();
    let left = r.left, top = r.bottom + 8;
    if (left + t.width > window.innerWidth - 12) left = window.innerWidth - t.width - 12;
    if (top + t.height > window.innerHeight - 12) top = r.top - t.height - 8;
    tip.style.left = Math.max(12, left) + 'px';
    tip.style.top  = Math.max(8, top) + 'px';
  }
  function hideTip() { const t = document.getElementById('tip'); if (t) t.style.display = 'none'; }

  document.addEventListener('mouseover', e => { const g = e.target.closest && e.target.closest('.gl'); if (g) showTip(g); });
  document.addEventListener('mouseout',  e => { if (e.target.closest && e.target.closest('.gl')) hideTip(); });
  document.addEventListener('focusin',   e => { const g = e.target.closest && e.target.closest('.gl'); if (g) showTip(g); });
  document.addEventListener('focusout',  e => { if (e.target.closest && e.target.closest('.gl')) hideTip(); });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.hero-content, .section').forEach(annotate);
  });
})();
