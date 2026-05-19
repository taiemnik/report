# Kopřivnice 2023–2026 — zpráva z tiskových zpráv

Interaktivní editoriální report (Shrnutí, Úřad, Goliáši, Témata, Databáze, Vývoj).

**Živě:** https://taiemnik.github.io/report/

## GitHub Pages

**Settings → Pages → Build and deployment:**

- Source: **Deploy from a branch**
- Branch: `main`, folder: **/ (root)**

Soubor `.nojekyll` zajišťuje, že GitHub nezpracovává stránku přes Jekyll.

## Aktualizace (z vaultu `Work/2 Projects/Tiskovky`)

```bash
python scripts/build_report_bundle.py
cd aplikace/report
npx vite build
# zkopírovat dist/* → aplikace/web-public/ (viz scripts/deploy_report_pages.py)
cd ../web-public
git add -A && git commit -m "Aktualizace reportu" && git push
```

## Technologie

- React + Vite + Tailwind, Chart.js, Motion
- Data: `report-bundle.json` (agregované metriky, TZ metadata a texty pro modal)

## Co na GitHub nepatří

- Celý vault MYSECONDBRAIN
- `data/zdroje/`, surové TZ v `data/tiskovky/`
- Zdrojový kód v `aplikace/report/` (build probíhá lokálně)
