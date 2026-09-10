/* Interactive catalogue tables: live search, column filters, click-to-sort.
   No external dependencies. Progressive enhancement: without JS the table
   still renders as a plain, readable HTML table. */

(function () {
  "use strict";

  function textOf(cell) {
    return (cell.dataset.sort || cell.textContent || "").trim();
  }

  function compare(a, b, index, numeric) {
    var x = textOf(a.cells[index]);
    var y = textOf(b.cells[index]);
    if (numeric) {
      var nx = parseFloat(x.replace(/[^0-9.\-]/g, ""));
      var ny = parseFloat(y.replace(/[^0-9.\-]/g, ""));
      if (isNaN(nx) && isNaN(ny)) return 0;
      if (isNaN(nx)) return 1;
      if (isNaN(ny)) return -1;
      return nx - ny;
    }
    return x.localeCompare(y, "en", { numeric: true, sensitivity: "base" });
  }

  function setupSorting(table) {
    var headers = table.tHead ? table.tHead.rows[0].cells : [];
    Array.prototype.forEach.call(headers, function (th, index) {
      if (th.classList.contains("no-sort")) return;
      th.classList.add("sortable");
      th.setAttribute("tabindex", "0");
      th.setAttribute("role", "button");

      function sort() {
        var body = table.tBodies[0];
        var rows = Array.prototype.slice.call(body.rows);
        var asc = th.getAttribute("aria-sort") !== "ascending";
        var numeric = th.dataset.numeric === "true";

        rows.sort(function (a, b) {
          return asc ? compare(a, b, index, numeric) : compare(b, a, index, numeric);
        });
        rows.forEach(function (r) { body.appendChild(r); });

        Array.prototype.forEach.call(headers, function (o) {
          o.removeAttribute("aria-sort");
        });
        th.setAttribute("aria-sort", asc ? "ascending" : "descending");
      }

      th.addEventListener("click", sort);
      th.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sort(); }
      });
    });
  }

  function setupFiltering(wrapper, table) {
    var search = wrapper.querySelector(".mfc-search");
    var selects = wrapper.querySelectorAll(".mfc-filter");
    var count = wrapper.querySelector(".mfc-count");
    var rows = Array.prototype.slice.call(table.tBodies[0].rows);
    var total = rows.length;

    function apply() {
      var query = search ? search.value.trim().toLowerCase() : "";
      var active = [];
      Array.prototype.forEach.call(selects, function (sel) {
        if (sel.value) active.push({ col: parseInt(sel.dataset.column, 10), value: sel.value });
      });

      var shown = 0;
      rows.forEach(function (row) {
        var ok = true;
        if (query && row.textContent.toLowerCase().indexOf(query) === -1) ok = false;
        if (ok) {
          for (var i = 0; i < active.length; i++) {
            var cell = row.cells[active[i].col];
            var value = cell ? textOf(cell) : "";
            if (value.indexOf(active[i].value) === -1) { ok = false; break; }
          }
        }
        row.hidden = !ok;
        if (ok) shown++;
      });

      if (count) {
        count.textContent = shown === total
          ? "Showing all " + total + " rows."
          : "Showing " + shown + " of " + total + " rows.";
      }
      var empty = wrapper.querySelector(".mfc-empty");
      if (empty) empty.hidden = shown !== 0;
    }

    if (search) search.addEventListener("input", apply);
    Array.prototype.forEach.call(selects, function (sel) {
      sel.addEventListener("change", apply);
    });

    var reset = wrapper.querySelector(".mfc-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        if (search) search.value = "";
        Array.prototype.forEach.call(selects, function (sel) { sel.value = ""; });
        apply();
      });
    }
    apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".mfc-table-wrapper").forEach(function (wrapper) {
      var table = wrapper.querySelector("table.mfc-table");
      if (!table || !table.tBodies.length) return;
      setupSorting(table);
      setupFiltering(wrapper, table);
    });
  });
})();
