# Kopřivnice 2023–2026 — analytický dashboard

Interaktivní přehled tiskových zpráv a plnění akčního plánu (režimy **Vedení města** / **Občané**).

## GitHub Pages (doporučeno)

1. Vytvoř na GitHubu **nové prázdné repo** (např. `koprivnice-dashboard`).
2. Nahraj **obsah této složky** jako kořen repozitáře (ne nadřazenou složku `github-publish`).
3. **Settings → Pages → Build and deployment:**
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: **/ (root)**
4. Po minutě běží na `https://<uzivatel>.github.io/<repo>/`

Soubor `.nojekyll` zajišťuje, že GitHub nezpracovává stránku přes Jekyll.

## Lokální náhled

```bash
python -m http.server 8080
```

Otevři http://localhost:8080 — soubor `index.html` musí být v kořeni serveru.

## Aktualizace dat (z pracovní kopie v Obsidianu)

Tato složka je **export**. V vaultu `Work/2 Projects/Tiskovky`:

```bash
python _data/pipeline.py
python scripts/sync_github_publish.py --build
```

Pak zkopíruj změněné soubory sem (nebo commitni z `github-publish/` pokud je to samostatné repo).

## Technologie

- HTML + Tailwind (CDN), Chart.js, vanilla JS
- Data: `data/dashboard-data.js` (agregované metriky a metadata TZ, bez plných textů článků)

## Licence / data

Veřejné informace z webu města Kopřivnice a agregované statistiky. Interní dokumenty AP nejsou součástí tohoto repozitáře.
