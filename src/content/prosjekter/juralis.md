---
tittel: Juralis
beskrivelse: Verifiserte og versjonerte data om EUs og FATFs lister over høyrisikoland, slik at man alltid kan bevise hvilken liste som gjaldt på en gitt dato.
år: 2026
rekkefølge: 2
type: Data og API
historikk:
  - dato: 2026-10-06
    tekst: Prosjektet startet, med teknisk spesifikasjon og database.
---

Banker og andre som må følge hvitvaskingsregelverket, må vite hvilke land som står på EUs og FATFs lister over høyrisikoland. Listene endres flere ganger i året, og de publiseres på hver sin måte. Det er lett å gå glipp av en endring, og vanskelig å dokumentere i ettertid hvilken liste som gjaldt da en beslutning ble tatt.

Juralis samler listene som verifiserte og versjonerte data. Løftet er at du aldri går glipp av en endring, og at du alltid kan vise hvilken liste som gjaldt på en bestemt dato.

## Hva det består av

- **highriskcountries.eu**: en gratis side som viser dagens lister og en side per land, med varsel på e-post når listene endres.
- **juralis.eu**: produktsiden, og et API med full historikk, oppslag på dato og endringsvarsler.

## Slik er det laget

Hver endring lagres som en hendelse som aldri overskrives, i PostgreSQL. Ved hver utgivelse bygges et komplett og uforanderlig øyeblikksbilde av dataene. Nettsidene og API-et leser bare fra disse øyeblikksbildene, så databasen er aldri i veien for den som slår opp. Nettsidene er bygget med Astro og kjører på Cloudflare.

Dataene skiller mellom når en endring ble *kunngjort* og når den faktisk *gjelder*.
