# Metodologie — jak se co počítá

Tento dokument vysvětluje, odkud pocházejí všechna čísla v reportech a v aplikaci, jak byla spočítána a kde jsou hranice jejich platnosti. Cílem je, aby každý údaj byl ověřitelný a aby bylo jasné, co je tvrdé měření a co interpretace.

## Zdroje dat

| Oblast | Zdroj | Formát |
|---|---|---|
| Plnění akčních plánů | Vyhodnocení AP 2023–24, 2024–25, 2025–26 + návrh AP 2026–27 | XLSX (originály) |
| Strategický plán | Strategický plán rozvoje města 2023–2038 | PDF |
| Činnost úřadu | Zprávy o činnosti MÚ 2022–2025 | DOCX |
| Komunikace | Archiv tiskových zpráv 2022–2026 (1086 souborů) | Markdown |

Reporty čerpají přímo z těchto originálů. Aplikace navíc používá agregovaný datový balíček `report-bundle.json`, který staví skript `scripts/build_report_bundle.py`.

## Plnění akčních plánů (36 %)

Každá aktivita má ve vyhodnocovací tabulce sloupec „Vyhodnocení". Jeho textová hodnota je zařazena do jednoho ze stavů:

| Stav | Pravidlo (klíčová slova ve „Vyhodnocení") |
|---|---|
| **splněno** | „splněno", „realizováno", „dokončeno", „hotovo" |
| **probíhá** | „zahájeno", „plněno průběžně" |
| **nezahájeno** | „nezahájeno" |
| **pozastaveno** | „pozastaveno", „přerušeno" |
| **zrušeno** | „zrušeno", „vypustit" |
| **neuvedeno** | prázdná buňka |

Procento plnění = počet aktivit ve stavu „splněno" ÷ celkový počet aktivit. Napříč třemi vyhodnocenými akčními plány: **178 splněno z 500 aktivit = 36 %**. Podíl „probíhá" (zahájeno) je 48 % — proto je dokončenost nízká, ale rozpracovanost vysoká.

> Poznámka k rozdílu vůči aplikaci: záložka Strategie může uvádět mírně odlišné procento (≈ 38 %), protože datová pipeline aplikace klasifikuje stavy vlastním postupem. Reporty používají přímou klasifikaci z originálních tabulek popsanou výše. Rozdíl je v řádu jednotek procent a nemění závěry.

## Podíly oblastí (17 / 25 / 49 / 9 %)

Každá aktivita patří do jedné ze čtyř prioritních oblastí strategického plánu (A–D). Podíl oblasti = počet jejích aktivit ÷ celkový počet aktivit. Napříč třemi akčními plány (500 aktivit):

- A — Ekonomika a podnikání: 86 → **17 %**
- B — Přitažlivost / veřejný život: 126 → **25 %**
- C — Vyvážený rozvoj: 244 → **49 %**
- D — Sociální zázemí: 44 → **9 %**

## Tematická klasifikace tiskových zpráv

Tiskové zprávy nemají v původních datech přiřazené téma, proto je odvozujeme automaticky. Každá zpráva je zařazena do jednoho z deseti témat podle klíčových slov v titulku a úvodu (investice/stavby, kultura/sport, doprava, sociální oblast, školství, životní prostředí, participace, image/ocenění, podnikání, provozní). Pokud žádné klíčové slovo nesedí, zpráva zůstává nezařazená — to se týká zhruba **11 %** zpráv.

Podíl tématu = počet jeho zpráv ÷ celkový počet zpráv (1086). Klasifikace je orientační: slouží k zachycení proporcí, ne k přesnému počítání jednotlivých zpráv.

## Komunikační mezera (proč se liší čísla)

Mezera porovnává **podíl práce** (rozložení aktivit akčního plánu po oblastech) s **podílem komunikace** (rozložení tiskových zpráv). Záporná mezera = oblast je v komunikaci slabší, než odpovídá objemu práce; kladná = je „překomunikovaná".

Zásadní upozornění: výsledek závisí na tom, jak se komunikační témata přiřadí ke strategickým oblastem, a tady existují dva legitimní pohledy, které dávají různá čísla:

1. **Oficiální oblasti strategického plánu (A–D).** Téma se mapuje na oblast, do které věcně patří. Některá témata jsou ale hraniční (školství patří do A „flexibilní a vzdělaní lidé" i do D „sociální zázemí").
2. **Tematické členění aplikace.** Aplikace používá vlastní košíky (Infrastruktura a bezpečnost, Komunita a kvalita života…), které neodpovídají 1:1 oblastem A–D.

Oba pohledy se **shodují ve směru**: témata blízká každodennímu životu a viditelným akcím dostávají víc prostoru, než odpovídá jejich podílu na práci; náročná přípravná a „enabling" témata (podnikání, participace) dostávají méně. Liší se jen v konkrétních procentech podle zvoleného mapování. Reporty proto vedou hlavní závěry na úrovni témat (kde jsou robustní), ne na úrovni přesných procent oblastí.

## Skóre nálad města (74/100)

Skóre nálad je **interpretační**, nikoli výsledek průzkumu mezi obyvateli. Pro šest dimenzí (ambice a investiční optimismus, bezpečí a infrastruktura, komunita, hrdost a image, rodiny/školství/péče, participace a důvěra) je z obsahu a tónu tiskových zpráv odvozeno skóre 0–100 vyjadřující, jak silně a pozitivně dané téma v komunikaci zaznívá. Celkové skóre 74 je průměrem dimenzí.

Co skóre znamená a co ne:
- **Znamená:** jak město samo o sobě komunikuje — sílu a vyznění jednotlivých témat v jeho vlastních zprávách.
- **Neznamená:** spokojenost obyvatel. Pro tvrzení o náladě obyvatel by bylo nutné samostatné sociologické šetření.

## Společná omezení

- Klasifikace témat i stavů je automatická a orientační (u témat ~11 % nezařazeno).
- Stav „probíhá" nerozlišuje míru rozpracovanosti (0 % vs. 99 %).
- Rok 2026 je neúplný (data do jara 2026).
- Komunikační mezera je citlivá na mapování témat na oblasti — viz výše.
- Skóre nálad je interpretační, ne statistické.

## Doporučení k ověření

Pro zásadní rozhodnutí doporučujeme klíčová čísla ověřit proti originálním zdrojům (vyhodnocovací tabulky AP, zprávy o činnosti). Reporty uvádějí u každého oddílu zdroj a postup, aby šlo dohledat, odkud údaj pochází.
