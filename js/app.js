/**
 * Kopřivnice 2023–2026 — analytický dashboard
 * Data: window.DASHBOARD_DATA (data/dashboard-data.js)
 */
(function () {
  const D = window.DASHBOARD_DATA;
  if (!D) {
    document.body.innerHTML = '<p style="padding:2rem">Chybí data. Spusť: python build_data.py</p>';
    return;
  }

  let audience = 'vedeni'; // vedeni | obcan
  let activeSection = 'prehled';
  let charts = {};

  const fmt = (n) => {
    if (n == null) return '—';
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace('.', ',') + ' mld Kč';
    if (n >= 1e6) return Math.round(n / 1e6) + ' mil. Kč';
    if (n >= 1e3) return Math.round(n / 1e3) + ' tis. Kč';
    return n + ' Kč';
  };

  const fmtPct = (n, total) => (total ? Math.round((100 * n) / total) + ' %' : '—');

  const apTotal = Object.values(D.apStatusCounts).reduce((a, b) => a + b, 0);
  const splneno = (D.apStatusCounts['splněno'] || 0) + (D.apStatusCounts['splneno'] || 0);
  const zahajeno = (D.apStatusCounts['zahájeno'] || 0) + (D.apStatusCounts['zahajeno'] || 0);

  const copy = {
    vedeni: {
      heroSub: 'Datový podklad pro strategické rozhodování · křížová analýza SP, AP a 875 tiskových zpráv',
      kpi1: 'Položek AP',
      kpi2: 'Splněno AP',
      kpi3: 'Zahájeno AP',
      investLabel: 'Investiční tiskovky (kumul.)',
    },
    obcan: {
      heroSub: 'Co se ve městě změnilo za 4 roky — investice, akce a projekty, které vidíte kolem sebe',
      kpi1: 'Příběhů města',
      kpi2: 'Hotových projektů',
      kpi3: 'Rozjetých změn',
      investLabel: 'Velké stavby a rekonstrukce',
    },
  };

  function el(id) { return document.getElementById(id); }

  function renderHero() {
    const c = copy[audience];
    el('hero-sub').textContent = c.heroSub;
    el('stat-tz').textContent = D.meta.pressReleaseCount;
    const apEl = el('stat-ap');
    if (apEl) apEl.textContent = D.meta.apActivityCount;
    el('stat-splneno').textContent = audience === 'vedeni' ? fmtPct(splneno, apTotal) : splneno;
    el('stat-zahajeno').textContent = audience === 'vedeni' ? fmtPct(zahajeno, apTotal) : zahajeno;
    el('label-kpi1').textContent = c.kpi1;
    el('label-kpi2').textContent = c.kpi2;
    el('label-kpi3').textContent = c.kpi3;
    const invSum = D.yearlyStats.reduce((s, y) => s + y.investice, 0);
    el('stat-invest').textContent = invSum;
    el('label-invest').textContent = c.investLabel;
  }

  function destroyCharts() {
    Object.values(charts).forEach((ch) => ch && ch.destroy());
    charts = {};
  }

  function renderCharts() {
    destroyCharts();
    const navy = '#193a5f';
    const blue = '#3ea3dc';
    const green = '#4db05b';

    // Rok — sloupce
    const ctxYear = el('chart-year');
    if (ctxYear) {
      charts.year = new Chart(ctxYear, {
        type: 'bar',
        data: {
          labels: D.yearlyStats.map((y) => y.year),
          datasets: [
            {
              label: 'Investiční',
              data: D.yearlyStats.map((y) => y.investice),
              backgroundColor: blue,
              borderRadius: 6,
            },
            {
              label: 'Komunitní / měkké',
              data: D.yearlyStats.map((y) => y.mekky),
              backgroundColor: green,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } },
        },
      });
    }

    // Témata — doughnut
    const themes = Object.entries(D.themeCounts).sort((a, b) => b[1] - a[1]);
    const ctxTheme = el('chart-theme');
    if (ctxTheme) {
      charts.theme = new Chart(ctxTheme, {
        type: 'doughnut',
        data: {
          labels: themes.map(([k]) => D.themeLabels[k] || k),
          datasets: [{
            data: themes.map(([, v]) => v),
            backgroundColor: ['#193a5f', '#3ea3dc', '#4db05b', '#e8b84a', '#94a3b8', '#f472b6', '#a78bfa', '#fb923c', '#64748b', '#cbd5e1'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } } },
        },
      });
    }

    // AP stav
    const apLabels = Object.keys(D.apStatusCounts);
    const ctxAp = el('chart-ap');
    if (ctxAp) {
      charts.ap = new Chart(ctxAp, {
        type: 'doughnut',
        data: {
          labels: apLabels,
          datasets: [{
            data: apLabels.map((k) => D.apStatusCounts[k]),
            backgroundColor: [green, blue, '#94a3b8', '#f59e0b', '#ef4444', '#a78bfa'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } },
        },
      });
    }
  }

  function renderMega() {
    const container = el('mega-grid');
    container.innerHTML = D.megaProjects.map((m) => `
      <article class="card mega-card p-5 fade-in">
        <span class="text-xs font-semibold uppercase tracking-wide text-[#3ea3dc]">Oblast ${m.area}</span>
        <h3 class="text-lg font-bold text-[#193a5f] mt-1">${m.title}</h3>
        <p class="text-2xl font-extrabold text-[#193a5f] mt-2">${fmt(m.amount)}</p>
        <p class="text-sm text-[#5a6b80] mt-2">${m.status}</p>
        <p class="text-sm mt-3 border-t pt-3 text-[#1a2533]">${audience === 'obcan' ? m.benefit : m.benefit}</p>
      </article>
    `).join('');
  }

  function renderWow() {
    const container = el('wow-list');
    container.innerHTML = D.wowMoments.map((w) => `
      <div class="wow-card card p-4 flex gap-4 items-start fade-in">
        <span class="text-sm font-mono font-bold text-[#3ea3dc] shrink-0 w-16">${w.date}</span>
        <div>
          <h4 class="font-bold text-[#193a5f]">${w.title}</h4>
          <p class="text-sm text-[#5a6b80] mt-1">${w.detail}</p>
        </div>
      </div>
    `).join('');
  }

  function renderSpMatrix() {
    const tbody = el('sp-matrix-body');
    tbody.innerHTML = D.spMatrix.map((r) => `
      <tr>
        <td class="font-bold text-[#193a5f]">${r.area}</td>
        <td>${r.name}</td>
        <td class="text-sm">${r.ap}</td>
        <td><span class="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">${r.status}</span></td>
        <td>${r.press ? '✓ Ano' : '—'}</td>
      </tr>
    `).join('');
  }

  function renderPressTable(filter = '') {
    const q = filter.toLowerCase();
    let list = [...D.pressReleases];
    if (q) {
      list = list.filter((p) =>
        (p.title + p.themeLabel + (p.benefit || '')).toLowerCase().includes(q)
      );
    }
    list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    list = list.slice(0, 80);
    const tbody = el('press-table-body');
    tbody.innerHTML = list.map((p) => `
      <tr>
        <td class="text-sm whitespace-nowrap">${p.date || '—'}</td>
        <td class="text-sm">${p.themeLabel}</td>
        <td class="font-medium">${p.title}</td>
        <td><span class="tag-${p.type} text-xs px-2 py-0.5 rounded">${p.type}</span></td>
        <td class="text-sm font-mono">${fmt(p.amountCzk)}</td>
        <td>${p.wowScore >= 2 ? '★'.repeat(p.wowScore) : ''}</td>
      </tr>
    `).join('');
    el('press-count').textContent = `Zobrazeno ${list.length} z ${D.pressReleases.length}`;
  }

  function showSection(id) {
    activeSection = id;
    document.querySelectorAll('[data-section]').forEach((s) => {
      s.classList.toggle('hidden', s.dataset.section !== id);
    });
    document.querySelectorAll('.nav-pill').forEach((b) => {
      b.classList.toggle('active', b.dataset.nav === id);
    });
    if (id === 'prehled' || id === 'strategie') setTimeout(renderCharts, 50);
  }

  function renderFooter() {
    const foot = el('footer-updated');
    if (!foot || !D.meta?.generated) return;
    const d = new Date(D.meta.generated);
    foot.textContent = 'Aktualizace dat: ' + d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function init() {
    renderHero();
    renderFooter();
    renderMega();
    renderWow();
    renderSpMatrix();
    renderPressTable();
    renderCharts();

    document.querySelectorAll('.nav-pill').forEach((btn) => {
      btn.addEventListener('click', () => showSection(btn.dataset.nav));
    });

    document.querySelectorAll('.audience-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        audience = btn.dataset.audience;
        document.querySelectorAll('.audience-btn').forEach((b) => b.classList.toggle('active', b === btn));
        el('mode-vedeni').classList.toggle('hidden', audience !== 'vedeni');
        el('mode-obcan').classList.toggle('hidden', audience !== 'obcan');
        renderHero();
        renderMega();
      });
    });

    el('search-press').addEventListener('input', (e) => renderPressTable(e.target.value));

    el('filter-wow').addEventListener('change', (e) => {
      if (e.target.checked) {
        const wow = D.pressReleases.filter((p) => p.wowScore >= 2);
        el('press-table-body').innerHTML = wow.slice(0, 50).map((p) => `
          <tr><td>${p.date}</td><td>${p.themeLabel}</td><td>${p.title}</td>
          <td>${p.type}</td><td>${fmt(p.amountCzk)}</td><td>${'★'.repeat(p.wowScore)}</td></tr>
        `).join('');
      } else renderPressTable(el('search-press').value);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
