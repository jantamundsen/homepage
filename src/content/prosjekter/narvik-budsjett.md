---
tittel: Pengene i Narvik
beskrivelse: Hvor går pengene i Narvik kommune? Regnskap, budsjett og året så langt, fordelt på tjenester og sammenlignet med landet og Nordland.
år: 2026
rekkefølge: 1
type: Datavisualisering
lenke: https://jtkarlsen.github.io/narvik-kommune-budsjett/
kildekode: https://github.com/jtkarlsen/narvik-kommune-budsjett
historikk:
  - dato: 2026-10-17
    tekst: Første versjon, med netto driftsutgifter per tjenesteområde fra SSB.
  - dato: 2026-10-18
    tekst: Budsjett mot regnskap, detaljer ned til kostnadstype, og en egen side for året så langt.
---

Kommunebudsjetter publiseres som lange dokumenter med tabeller. De er offentlige, men tunge å lese og vanskelige å sammenligne. Pengene i Narvik er en enkel nettside som viser hva Narvik kommune faktisk bruker penger på, år for år, og hvordan det står seg mot landet og Nordland.

## Hva siden viser

- **Regnskapet**: netto driftsutgifter fordelt på 15 tjenesteområder folk kjenner igjen, som skole, helse og omsorg og vei.
- **Detaljer**: trykk på et område for å gå ned til en tjeneste, og videre til hva pengene går til, for eksempel lønn. Hvert nivå har sin egen adresse, så det kan deles.
- **Budsjett mot regnskap**: kommunens vedtatte budsjett ved siden av det som faktisk ble brukt.
- **Året så langt**: forbruk hittil, avvik og prognose fra tertialrapportene, og skatteinngangen måned for måned.

## Slik er det laget

Tallene kommer fra SSBs KOSTRA-statistikk og fra kommunens egne budsjettdokumenter. Små Python-skript henter dataene, og en GitHub Actions-jobb oppdaterer dem automatisk. Selve siden er statisk, uten server, database eller byggesteg.

SSB rapporterer rundt 80 KOSTRA-funksjoner. De er gruppert i tjenesteområder folk kjenner igjen, og hver funksjon hører til nøyaktig ett område, slik at summene alltid stemmer.
