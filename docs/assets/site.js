// Label each table cell with its column name, so phones can show rows as cards.
function labelTables() {
  document.querySelectorAll(".md-typeset table").forEach(t => {
    const heads = [...t.querySelectorAll("thead th")].map(th => th.textContent.trim());
    if (heads.length < 3) return;
    t.classList.add("stack");
    t.querySelectorAll("tbody tr").forEach(tr =>
      [...tr.children].forEach((td, i) => td.setAttribute("data-label", heads[i] || "")));
  });
}
if (typeof document$ !== "undefined") document$.subscribe(labelTables);
else document.addEventListener("DOMContentLoaded", labelTables);
