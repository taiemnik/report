# Metodologie a transparentnost: jak report vznikl a jak ho číst

Tento dokument je návod ke čtení celého Reportu plnění strategického plánu. Vysvětluje, jak report vznikl, jakou roli v něm hrála umělá inteligence, odkud pocházejí všechna čísla a kde jsou hranice jejich platnosti. Cílem je, aby každý údaj byl dohledatelný a aby bylo vždy jasné, co je tvrdé měření a co interpretace.

## Co tento report je — a co není

**Report je** analytické čtení toho, jak se naplňuje Strategický plán rozvoje města Kopřivnice 2023–2038: přes vyhodnocení dvouletých akčních plánů, vybrané projekty a komunikaci města v tiskových zprávách.

**Report není:**

- **audit hospodaření ani vyúčtování investic** — nepracuje s rozpočtem města, závěrečnými účty ani účetnictvím;
- **hodnocení práce konkrétních osob či orgánů města** — sleduje plnění plánu, ne kdo za co může;
- **průzkum spokojenosti obyvatel** — tam, kde report mluví o „náladách", jde o rozbor toho, jak město samo komunikuje, ne o měření názorů občanů.

Report nenahrazuje oficiální dokumenty města. Ty jsou vždy nadřazeným zdrojem.

## Jak se pracovalo s umělou inteligencí

Report vznikl kombinací strojového zpracování (AI) a lidské redakce.

**Co udělala AI:**

- převedla podklady (vyhodnocovací tabulky akčních plánů, PDF strategického plánu, archiv tiskových zpráv) do strojově čitelné podoby;
- klasifikovala stavy aktivit akčních plánů podle klíčových slov ve sloupci „Vyhodnocení";
- roztřídila tiskové zprávy do témat podle klíčových slov;
- spočítala souhrnné statistiky a připravila podklady pro grafy;
- navrhla texty shrnutí a interpretací, které následně prošly lidskou redakcí;
- odvodila interpretační skóre „nálad" z obsahu a tónu tiskových zpráv.

**Co AI neudělala a nedělá:**

- nevytvářela ani neměnila zdrojová data — všechna čísla vycházejí z existujících dokumentů města;
- nehodnotí kvalitu rozhodnutí města ani jednotlivých projektů;
- nerozhodovala o tom, co se do reportu zařadí — výběr, kontrola a finální znění jsou lidská práce.

**Jak to interpretovat:** i s lidskou kontrolou platí, že automatická klasifikace obsahuje chyby (typicky v řádu jednotek procent) a shrnutí generovaná AI mohou zjednodušovat. Čísla v reportu čtěte jako **proporce a trendy**, ne jako přesné účetní hodnoty. U každého údaje uvádíme zdroj a postup, aby šel ověřit.

## Odkud jsou čísla — a odkud nejsou

| Oblast | Zdroj | Formát |
|---|---|---|
| Plnění akčních plánů | Vyhodnocení AP 2023–24, 2024–25, 2025–26 + návrh AP 2026–27 | tabulky (originály) |
| Strategický plán | Strategický plán rozvoje města 2023–2038 | PDF |
| Komunikace | Archiv tiskových zpráv z koprivnice.cz 2022–2026 (1086 souborů) | text |

Reporty čerpají přímo z těchto originálů. Aplikace navíc používá agregovaný datový balíček, který se z originálů staví skriptem.

**Dvě zásadní vymezení:**

1. **Čísla o plnění pocházejí z vyhodnocení akčních plánů, ne z rozpočtu města.** Když report říká, že je něco „splněno" nebo „probíhá", opírá se o to, jak aktivitu vyhodnotil garant v akčním plánu — ne o rozpočtové čerpání.
2. **Částky uváděné u projektů nejsou finální investice.** Částky na kartách projektů a u tiskových zpráv jsou hodnoty, které zazněly v tiskových zprávách nebo podkladech v době oznámení či průběhu projektu (předpokládané náklady, vysoutěžené ceny, dotační rámce). **Neříkají, kolik projekt nakonec skutečně stál.** Pro skutečné náklady je nutné jít do rozpočtu a závěrečného účtu města.

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

Procento plnění = počet aktivit ve stavu „splněno" ÷ celkový počet aktivit. Napříč třemi vyhodnocenými akčními plány: **178 splněno z 500 aktivit = 36 %**. Podíl „probíhá" (zahájeno) je 48 %, proto je dokončenost nízká, ale rozpracovanost vysoká.

> Poznámka k rozdílu vůči aplikaci: záložka Strategie může uvádět mírně odlišné procento (≈ 38 %), protože datová pipeline aplikace klasifikuje stavy vlastním postupem. Reporty používají přímou klasifikaci z originálních tabulek popsanou výše. Rozdíl je v řádu jednotek procent a nemění závěry.

## Podíly oblastí (17 / 25 / 49 / 9 %)

Každá aktivita patří do jedné ze čtyř prioritních oblastí strategického plánu (A–D). Podíl oblasti = počet jejích aktivit ÷ celkový počet aktivit. Napříč třemi akčními plány (500 aktivit):

- A: Ekonomika a podnikání: 86 → **17 %**
- B: Přitažlivost / veřejný život: 126 → **25 %**
- C: Vyvážený rozvoj: 244 → **49 %**
- D: Sociální zázemí: 44 → **9 %**

## Tematická klasifikace tiskových zpráv

Tiskové zprávy nemají v původních datech přiřazené téma, proto je odvozujeme automaticky. Každá zpráva je zařazena do jednoho z deseti témat podle klíčových slov v titulku a úvodu (investice/stavby, kultura/sport, doprava, sociální oblast, školství, životní prostředí, participace, image/ocenění, podnikání, provozní). Pokud žádné klíčové slovo nesedí, zpráva zůstává nezařazená, to se týká zhruba **11 %** zpráv.

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
- **Znamená:** jak město samo o sobě komunikuje, sílu a vyznění jednotlivých témat v jeho vlastních zprávách.
- **Neznamená:** spokojenost obyvatel. Pro tvrzení o náladě obyvatel by bylo nutné samostatné sociologické šetření.

## Pohledy pro občany a zastupitele

Každý report končí dvěma krátkými pohledy: **Pro občany** a **Pro zastupitele**. Nejsou to nová data — jen jiné shrnutí téhož obsahu. Pohled pro občany překládá zjištění do každodenní řeči; pohled pro zastupitele zdůrazňuje, na co se ptát při kontrole plnění plánu a schvalování dalších akčních plánů.

## Společná omezení

- Klasifikace témat i stavů je automatická a orientační (u témat ~11 % nezařazeno).
- Stav „probíhá" nerozlišuje míru rozpracovanosti (0 % vs. 99 %).
- Rok 2026 je neúplný (data do jara 2026).
- Komunikační mezera je citlivá na mapování témat na oblasti, viz výše.
- Skóre nálad je interpretační, ne statistické.
- Částky u projektů jsou hodnoty z doby oznámení, ne finální náklady (viz výše).

## Doporučení k ověření

Pro zásadní rozhodnutí doporučujeme klíčová čísla ověřit proti originálním zdrojům (vyhodnocovací tabulky akčních plánů, oficiální dokumenty města). Reporty uvádějí u každého oddílu zdroj a postup, aby šlo dohledat, odkud údaj pochází.
